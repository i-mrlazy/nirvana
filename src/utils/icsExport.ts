import { PanchangDay } from '../types';

/**
 * Parses time string like "06:12 AM" or "04:35 PM" on a given Date object
 * and returns an ISO string formatted for iCalendar.
 */
function parseTimeToDate(baseDate: Date, timeStr: string): Date | null {
  if (!timeStr) return null;
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3] ? match[3].toUpperCase() : null;

  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;

  const res = new Date(baseDate);
  res.setHours(hours, minutes, 0, 0);
  return res;
}

function formatDateToICS(d: Date): string {
  const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

export function generatePanchangICS(panchang: PanchangDay, cityName: string): string {
  const events: string[] = [];
  const baseDate = new Date(panchang.date);
  const nowFormatted = formatDateToICS(new Date());
  const regionLabel = panchang.regionalPanchang?.regionName || 'Panchang';

  const addEvent = (summary: string, description: string, startTimeStr: string, endTimeStr: string) => {
    const startDate = parseTimeToDate(baseDate, startTimeStr);
    const endDate = parseTimeToDate(baseDate, endTimeStr);

    if (!startDate || !endDate) return;

    if (endDate <= startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    events.push(
      [
        'BEGIN:VEVENT',
        `UID:panchang-${Date.now()}-${Math.random().toString(36).substring(2, 8)}@nirvana.org`,
        `DTSTAMP:${nowFormatted}`,
        `DTSTART:${formatDateToICS(startDate)}`,
        `DTEND:${formatDateToICS(endDate)}`,
        `SUMMARY:${summary}`,
        `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
        `LOCATION:${cityName}`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      ].join('\r\n')
    );
  };

  // Abhijit
  if (panchang.muhurat?.abhijit) {
    const [start, end] = panchang.muhurat.abhijit.split(' - ');
    if (start && end) {
      addEvent(
        `Auspicious Abhijit Muhurat (${regionLabel})`,
        `Most auspicious window of the day for starting important work and prayers.\\nTithi: ${panchang.tithi}\\nNakshatra: ${panchang.nakshatra}\\nRegion: ${regionLabel}`,
        start,
        end
      );
    }
  }

  // Brahma Muhurta
  if (panchang.muhurat?.brahmaMuhurta) {
    const [start, end] = panchang.muhurat.brahmaMuhurta.split(' - ');
    if (start && end) {
      addEvent(
        `Brahma Muhurta (Sacred Dawn Japa & Meditation)`,
        `Ideal time for meditation, mantra recitation, and spiritual study.\\nTithi: ${panchang.tithi}\\nRegion: ${regionLabel}`,
        start,
        end
      );
    }
  }

  // Rahu Kalam
  if (panchang.muhurat?.rahuKalam) {
    const [start, end] = panchang.muhurat.rahuKalam.split(' - ');
    if (start && end) {
      addEvent(
        `⚠️ Rahu Kalam (${regionLabel})`,
        `Inauspicious window governed by Rahu. Traditional wisdom advises avoiding starting major new ventures during this time.\\nLocation: ${cityName}`,
        start,
        end
      );
    }
  }

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//NIRVANA//Regional Panchang Muhurat Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:Panchang Muhurat - ${cityName} (${regionLabel})`,
    ...events,
    'END:VCALENDAR'
  ];

  return icsLines.join('\r\n');
}

export function downloadICSFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

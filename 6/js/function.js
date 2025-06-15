function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome (str) {
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

function isMeetingWithinWorkHours(startOfDay, endOfDay, meetingStart, meetingTime) {
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const startDayMinutes = timeToMinutes(startOfDay);
  const endDayMinutes = timeToMinutes(endOfDay);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingTime;

  return meetingStartMinutes >= startDayMinutes && meetingEndMinutes <= endDayMinutes;
}

isMeetingWithinWorkHours('08:00', '17:30', '14:00', 90);
isMeetingWithinWorkHours('8:0', '10:0', '8:0', 120);

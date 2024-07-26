function solution(book_time) {
    const sortedBookTime = book_time.sort((a, b) => {
        const startA = Number(a[0].split(':')[0]) * 60 + Number(a[0].split(':')[1]);
        const startB = Number(b[0].split(':')[0]) * 60 + Number(b[0].split(':')[1]);
        return startA - startB;
    });

    const bookTimeToMinute = sortedBookTime.map((time) => {
        const startTime = Number(time[0].split(':')[0]) * 60 + Number(time[0].split(':')[1]);
        const endTime = Number(time[1].split(':')[0]) * 60 + Number(time[1].split(':')[1]) + 10;
        return [startTime, endTime];
    });

    const rooms = [];

    
    for (const [start, end] of bookTimeToMinute) {
        const roomIdx = rooms.findIndex(v => v <= start);

        if (roomIdx === -1) {        
            rooms.push(end);
        } else {         
            rooms[roomIdx] = end;
        }
    }
  
    return rooms.length;
}
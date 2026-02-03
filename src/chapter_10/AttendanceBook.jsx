const students = [
    {
        id: 1,
        name: 'Selena',
    },
    {
        id: 2,
        name: 'Steve',
    },
    {
        id: 3,
        name: 'Bill',
    },
    {
        id: 4,
        name: 'Jeff',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
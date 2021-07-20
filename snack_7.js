var squadre = [
    {
        name: 'atalanta',
        city: 'bergamo',
        points: 9,
    },
    {
        name: 'inter',
        city: 'milano',
        points: 14,  
    },
    {
        name: 'milan',
        city: 'milano',
        points: 8, 
    },
    {
        name: 'juventus',
        city: 'torino',
        points: 23,
    }
];

squadre.sort(function(a, b) {
    return b.points - a.points;
});

var tableBody = document.querySelector('#table tbody');
var tableContent = '';
for(var i = 0; i < squadre.length; i++){
    var currentTeam = squadre[i];
    tableContent += '<tr>';
    tableContent += '<td>' + currentTeam.name + '</td>';
    tableContent += '<td>' + currentTeam.city + '</td>';
    tableContent += '<td>' + currentTeam.points + '</td>';
    tableContent += '</tr>';
}

tableBody.innerHTML = tableContent;
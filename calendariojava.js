window.addEventListener('load',function() {
    const monthsBR = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']; 
    const tableDays = document.getElementById('dias');
    function GetDaysCalendar(mes,ano){
        document.getElementById('mes').innerHTML = monthsBR[monthsBR];
        document.getElementById('ano').innerHTML = ano;

        Let firstDayofWeek = new Date(ano,mes,1).getDay()-1;
        Let getLastDayThisMonth = new  Date(ano,mes+1,0).getDate();


        for(var i = -firstDayofWeek; i < (42)){
    }
    GetDaysCalendar(2,2001)
})
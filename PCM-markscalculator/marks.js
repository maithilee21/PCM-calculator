var calculatemarks = ()=>{
    // console.log("function called");
    // console.log(document.getElementById("x1").value);
    var p = document.getElementById("x1").value;
    var c = document.getElementById("x2").value;
    var m = document.getElementById("x3").value;


    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("a4").innerHTML = "";

    var message = "";

    if(p == "" || c == "" || m == ""){
        message = "Values Required"
    }
    else if(isNaN(p) || isNaN(c) || isNaN(m)){
        message = "All values must be in number"
    }
    else if(p<0 || c<0 || m<0 || p>100 || c>100 || m>100){
        message = "Values must be in a valid range 0-100"

    }
    else if(p<35 || c<35 || m<35){
        message = "Failed"
    }
    else{
        message = "passed!!";
        p = Number(p);
        c = Number(c);
        m = Number(m);

        var total = p+c+m;

        document.getElementById("a2").innerHTML = `
        MARKS OBTAINED: ${total}/300
        `;
        var percentage = total/300*100;
        document.getElementById("a3").innerHTML = `
        PERCENTAGE: ${percentage.toFixed(2)}%
        `;

        var grade = "";

        if(percentage>=75){
            grade="distinction";
        }else if(percentage>=60){
            grade = "1st class"
        }
        else{
            grade = "2nd class"
        }

        document.getElementById("a4").innerHTML = `
        YOUR GRADE: ${grade}
        `;


        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("x3").value = "";




    }
    document.getElementById("a1").innerHTML = message;

    Highcharts.chart('container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Marks Calculator'
        },
        tooltip: {
          valueSuffix: '%'
        },
       
        plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
              enabled: true,
              distance: 20
            }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7
              },
              filter: {
                operator: '>',
                property: 'percentage',
                value: 10
              }
            }]
          }
        },
        series: [{
          name: 'Percentage',
          colorByPoint: true,
          data: [{
              name: 'Physics',
              y: p
            },
            {
              name: 'Maths',
              sliced: true,
              selected: true,
              y: m
            },
            {
              name: 'chemistry',
              y: c
            }
           
          ]
        }]
      });
      
}
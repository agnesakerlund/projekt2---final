//Declares the variable containing the path to the json-file
var JSONfile;
//Functions for buttons in the HTML document. A click will change the JSONfile variable
function f2016() {
    JSONfile = "includes/json/olyckor.json";
}
function f2015() {
    JSONfile = "includes/json/2015.json";
}
function f2014() {
    JSONfile = "includes/json/2014.json";
}
function f2013() {
    JSONfile = "includes/json/2013.json";
}
function f2012() {
    JSONfile = "includes/json/2012.json";
}
function f2011() {
    JSONfile = "includes/json/2011.json";
}
function f2010() {
    JSONfile = "includes/json/2010.json";
}
function f2009() {
    JSONfile = "includes/json/2009.json";
}
function f2008() {
    JSONfile = "includes/json/2008.json";
}
function f2007() {
    JSONfile = "includes/json/2007.json";
}
function f2006() {
    JSONfile = "includes/json/2006.json";
}
function f2005() {
    JSONfile = "includes/json/2005.json";
}
function f2004() {
    JSONfile = "includes/json/2004.json";
}
function f2003() {
    JSONfile = "includes/json/2003.json";
}
function f0316() {
    JSONfile = "includes/json/03til16.json";
}

//The function "allfunction" will also be invoked when one of several buttons in the HTML document is pressed.
function allfunction() {
    //Declares different variables that will be used in the charts
    var lindcount = 0,
        badcount = 0,
        unkcount = 0,
        nodmgcount = 0,
        deathcount = 0,
        totcount = 0,
        //Län
        blekinge = 0,
        dalarna = 0,
        gotland = 0,
        gavleborg = 0,
        halland = 0,
        jamtland = 0,
        jonkoping = 0,
        kalmar = 0,
        kronoberg = 0,
        norrbotten = 0,
        skane = 0,
        stockholm = 0,
        sodermanland = 0,
        uppsala = 0,
        varmland = 0,
        vasterbotten = 0,
        vasternorrland = 0,
        vastmanland = 0,
        vastragotaland = 0,
        orebro = 0,
        ostergotland = 0,
        okant = 0,
        //vaglag
        lossnoCOUNT = 0,
        tjockisCOUNT = 0,
        tunnisCOUNT = 0,
        synligCOUNT = 0,
        torrCOUNT = 0,
        fuktigCOUNT = 0,
        vagunknCOUNT = 0,
        //ar
        COUNT03 = 0,
        COUNT04 = 0,
        COUNT05 = 0,
        COUNT06 = 0,
        COUNT07 = 0,
        COUNT08 = 0,
        COUNT09 = 0,
        COUNT10 = 0,
        COUNT11 = 0,
        COUNT12 = 0,
        COUNT13 = 0,
        COUNT14 = 0,
        COUNT15 = 0,
        COUNT16 = 0,
        //manad
        month01 = 0,
        month02 = 0,
        month03 = 0,
        month04 = 0,
        month05 = 0,
        month06 = 0,
        month07 = 0,
        month08 = 0,
        month09 = 0,
        month10 = 0,
        month11 = 0,
        month12 = 0,

        //gets the index for the last element in db
        loopcount = 0,
        //Declares ourRequest as a new HMLHttpRequest
        ourRequest = new XMLHttpRequest();
        //Opens GET request from the JSONfile variable
    ourRequest.open('GET', JSONfile);
        //Invokes a function when ourRequest is loaded
    ourRequest.onload = function () {
        //Makes the responsetext loaded parsed to JSON and then makes an object called ourData
    var ourData = JSON.parse(ourRequest.responseText);
        //Tells the function renderHTML that it will use "ourData"
    renderHTML(ourData);
    };
    ourRequest.send();

        //The function renderHTML
    function renderHTML(data) {
            //Counts total accidents in the given JSON file
        loopcount = Object.keys(data).length;            
            //for-loop that runs as many times as there are accidents
        for (i = 0; i < loopcount; i++) {
                //Checks the property for every accident
            switch (data[i].svarighetsgrad) {
            case "Lindrig olycka":
                lindcount++;
                break;
            case "Svår olycka":
                badcount++;
                break;
            case "Okänd svårhetsgrad":
                unkcount++;
                break;
            case "Ej personskadeolycka":
                nodmgcount++;
                break;
            default:
                deathcount++;
            }
        }

        for (i = 0; i < loopcount; i++) {
            switch (data[i].lan) {
            case "Blekinge län":
                blekinge++;
                break;
            case "Dalarnas län":
                dalarna++;
                break;
            case "Gotlands län":
                gotland++;
                break;
            case "Gävleborgs län":
                gavleborg++;
                break;
            case "Hallands län":
                halland++;
                break;
            case "Jämtlands län":
                jamtland++;
                break;
            case "Jönköpings län":
                jonkoping++;
                break;
            case "Kalmar län":
                kalmar++;
                break;
            case "Kronobergs län":
                kronoberg++;
                break;
            case "Norrbottens län":
                norrbotten++;
                break;
            case "Skåne län":
                skane++;
                break;
            case "Stockholms län":
                stockholm++;
                break;
            case "Södermanlands län":
                sodermanland++;
                break;
            case "Uppsala län":
                uppsala++;
                break;
            case "Värmlands län":
                varmland++;
                break;
            case "Västerbottens län":
                vasterbotten++;
                break;
            case "Västernorrlands län":
                vasternorrland++;
                break;
            case "Västmanlands län":
                vastmanland++;
                break;
            case "Västra Götalands län":
                vastragotaland++;
                break;
            case "Örebro län":
                orebro++;
                break;
            case "Östergötlands län":
                ostergotland++;
                break;
            default:
                okant++;
            }
        }

        for (i = 0; i < loopcount; i++) {
            switch (data[i].vaglag) {
            case "Lös snö / snömodd":
                lossnoCOUNT++;
                break;
            case "Tjock is / packad snö":
                tjockisCOUNT++;
                break;
            case "Tunn is":
                tunnisCOUNT++;
                break;
            case "vägbanan synlig":
                synligCOUNT++;
                break;
            case "Vägbanan torr":
                torrCOUNT++;
                break;
            case "Vägbanan våt/fuktig":
                fuktigCOUNT++;
                break;
            default:
                vagunknCOUNT++;

            }
        }
        //Will only be run if the user chooses to see more than 1 year at a time
        if (JSONfile == "includes/json/03til16.json") {
            for (i = 0; i < loopcount; i++) {
                switch (data[i].ar) {
                case 2003:
                    COUNT03++;
                    break;
                case 2004:
                    COUNT04++;
                    break;
                case 2005:
                    COUNT05++;
                    break;
                case 2006:
                    COUNT06++;
                    break;
                case 2007:
                    COUNT07++;
                    break;
                case 2008:
                    COUNT08++;
                    break;
                case 2009:
                    COUNT09++;
                    break;
                case 2010:
                    COUNT10++;
                    break;
                case 2011:
                    COUNT11++;
                    break;
                case 2012:
                    COUNT12++;
                    break;
                case 2013:
                    COUNT13++;
                    break;
                case 2014:
                    COUNT14++;
                    break;
                case 2015:
                    COUNT15++;
                    break;
                default:
                    COUNT16++;

                }
            }
        }
        for (i = 0; i < loopcount; i++) {
            switch (data[i].manad) {
            case 1:
                month01++;
                break;
            case 2:
                month02++;
                break;
            case 3:
                month03++;
                break;
            case 4:
                month04++;
                break;
            case 5:
                month05++;
                break;
            case 6:
                month05++;
                break;
            case 6:
                month06++;
                break;
            case 7:
                month07++;
                break;
            case 8:
                month08++;
                break;
            case 9:
                month09++;
                break;
            case 10:
                month10++;
                break;
            case 11:
                month11++;
                break;
            default:
                month12++;

            }
        }
    
    totcount = loopcount;
    //Tell the  chart functions what variable to use    
    //Chart 1
    drawChart(lindcount, badcount, deathcount, nodmgcount, unkcount, totcount);
    //Chart 2
    drawChart2(blekinge, dalarna, gotland, gavleborg, halland, jamtland, jonkoping, kalmar, kronoberg, norrbotten, skane, stockholm, sodermanland, uppsala, varmland, vasterbotten, vasternorrland, vastmanland, vastragotaland, orebro, ostergotland, okant);
    //Chart 3
    drawChart3(totcount, lossnoCOUNT, tjockisCOUNT, tunnisCOUNT, synligCOUNT, torrCOUNT, fuktigCOUNT, vagunknCOUNT);
    //Chart 4
    //Again, only if the user wants to see more than 1 year
     if (JSONfile == "includes/json/03til16.json") {
    drawChart4(totcount, COUNT03, COUNT04, COUNT05, COUNT06, COUNT07, COUNT08, COUNT09, COUNT10, COUNT11, COUNT12, COUNT13, COUNT14, COUNT15, COUNT16);
     }
    //Chart 5
    drawChart5(totcount, month01, month02, month03, month04, month05, month06, month07, month08, month09, month10, month11, month12);
    //Chart 6
    
}
    // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
// google.charts.setOnLoadCallback(drawChart6);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
function drawChart() {

        // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Svårighetsgrad');
    data.addColumn('number', 'Antal');
    data.addRows([
        ['Lindriga olyckor', lindcount],
        ['Svåra olyckor', badcount],
        ['Dödsolyckor', deathcount],
        ['Okänd svårighetsgrad', unkcount],
        ['Ej personskadeolycka', nodmgcount]
    ]);

        // Set chart options
    var options = {'title': 'Fördelning av olycksgrad',
                   'width': 800,
                   'height': 600,
                   'is3D': false,
                    'pieHole' : 0.35,
                   'backgroundColor' : 'transparent',
                    'titleTextStyle' : {color : '#000',
                    fontSize : '20'},
                  };

        // Instantiate and draw our chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
function drawChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Län');
    data.addColumn('number', 'Antal');
    data.addRows([
        ['Blekinge län', blekinge],
        ['Dalarnas län', dalarna],
        ['Gotlands län', gotland],
        ['Gävleborgs län', gavleborg],
        ['Hallands län', halland],
        ['Jämtlands län', jamtland],
        ['Jönköpings län', jonkoping],
        ['Kalmar län', kalmar],
        ['Kronobergs län', kronoberg],
        ['Norrbottens län', norrbotten],
        ['Skåne län', skane],
        ['Stockholms län', stockholm],
        ['Södermanlands län', sodermanland],
        ['Uppsala län', uppsala],
        ['Värmlands län', varmland],
        ['Västerbottens län', vasterbotten],
        ['Västernorrlands län', vasternorrland],
        ['Västmanlands län', vastmanland],
        ['Västra Götalands län', vastragotaland],
        ['Örebro län', orebro],
        ['Östergötlands län', ostergotland],
        ['Okänt', okant]
    ]);
    var options = {'title': 'Olyckor per län',
                   'width': 800,
                   'height': 600,
                   'is3D': false,
                    'pieHole' : 0.35,
                   'backgroundColor' : 'transparent',
                    'titleTextStyle' : {color : '#000',
                    fontSize : '20'},
                  };
            
    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}
function drawChart3() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Väglag');
    data.addColumn('number', 'Antal');
    data.addRows([
        ['Lös snö', lossnoCOUNT],
        ['Tjock is / packad snö', tjockisCOUNT],
        ['Tunn is', tunnisCOUNT],
        ['Vägbanan torr', torrCOUNT],
        ['Vägbana våt/fuktig', fuktigCOUNT],
        ['Okänt', vagunknCOUNT]
    ]);
    var options = {'title': 'Fördelning av olyckor baserat på väglag',
                   'width': 800,
                   'height': 600,
                   'is3D': false,
                    'pieHole' : 0.35,
                   'backgroundColor' : 'transparent',
                    'titleTextStyle' : {color : '#000',
                    fontSize : '20'},
                   /*'slices': [{color: '#9999ff'}, {color: '#b2b2ff'}, {color: '#3232ff'}, {color: '#4c4cff'}, {color: '#6666ff'}, {color: '#7f7fff'}]*/
                  };
            
    var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}
//Again, only if the user wants to see more than 1 year
if (JSONfile == "includes/json/03til16.json") {
    function drawChart4() {
        var data = new google.visualization.arrayToDataTable([
            ['År', 'Olyckor'],
            ['2003', COUNT03],
            ['2004', COUNT04],
            ['2005', COUNT05],
            ['2006', COUNT06],
            ['2007', COUNT07],
            ['2008', COUNT08],
            ['2009', COUNT09],
            ['2010', COUNT10],
            ['2011', COUNT11],
            ['2012', COUNT12],
            ['2013', COUNT13],
            ['2014', COUNT14],
            ['2015', COUNT15],
            ['2016', COUNT16]
        ]);
        var options = {'title': 'Olyckor över åren',
                       'legend': {position: 'bottom'},
                       'width': 800,
                       'height': 600,
                       'backgroundColor' : 'transparent',
                        'titleTextStyle' : {color : '#000',
                        fontSize : '20'},
                       'curveType': 'function',
                      };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div4'));
        chart.draw(data, options);
    }
}

function drawChart5() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Månad');
    data.addColumn('number', 'Antal');
    data.addRows([
        ['Januari', month01],
        ['Februari', month02],
        ['Mars', month03],
        ['April', month04],
        ['Maj', month05],
        ['Juni', month06],
        ['Juli', month07],
        ['Augusti', month08],
        ['September', month09],
        ['Oktober', month10],
        ['November', month11],
        ['December', month12]
        ]);
    var options = {'title': 'Fördelning av olyckor baserat på månad',
                    'width': 800,
                    'height': 600,
                    'is3D': false,
                    'pieHole' : 0.35,
                    'legend' : 'none',
                    'pieSliceText' : 'label',
                    'backgroundColor' : 'transparent',
                    'slices' : {5: {offset: 0.8}, },
                    'titleTextStyle' : {color : '#000',
                    fontSize : '20'},
                    'pieSliceBorderColor' : 'white',
                  };
            
    var chart = new google.visualization.PieChart(document.getElementById('chart_div5'));
    chart.draw(data, options);
}
}
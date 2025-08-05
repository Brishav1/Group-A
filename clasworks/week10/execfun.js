function average(a){
            sum=0;
            for(i=0;i<a.length;i++){
                sum = sum+a[i];
                
            }
            av = sum/a.length;
            return av;
        }
    function main(){    
    a=[23,90,53,11];
    c=[45,90,56,98];
    av= average(a);
    document.write("The average: " + av+"<br>");
    avr=average (c);
    document.write("The Average:"+avr);
    
    }
    main();
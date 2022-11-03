    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const RATE_PER_HR=20;
    const Max_Working_Days=20;
    const Max_Working_HRs=160;

    let empWage=0;
   let totalEmpWage=0;
   let day=1;
   let totalWorkingHrs=0;

    function getWorkingHrs(randomInput)
    {
        let empHrs=0;
        switch(randomInput)
    {
        case IS_FULL_TIME:
        empHrs=8;
        return empHrs;

        case IS_PART_TIME:
            empHrs=4;
            return empHrs;

        default:
            empWage=0
            return empHrs;
        }
    }
    while(day<=Max_Working_Days && totalWorkingHrs<=Max_Working_HRs)
    {
       let randomInput=Math.floor(Math.random()* 10)%3;
       //console.log("Randomvalue:"+ randomInput);
       empWage=empHrs*RATE_PER_HR;
       totalEmpWage=+empWage;
       day=day+1;
       totalWorkingHrs+=empHrs
    }
    console.log(" Employee Wage:" + totalEmpWage);
    console.log("days:"+day-1 + "total working Hrs:" + totalWorkingHrs)

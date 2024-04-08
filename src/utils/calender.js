import dayjs from "dayjs";

export const genrateDate=(
    month=dayjs().month(),
    year=dayjs().year()
// THIS MEANS THAT DEAFULT VALUE OF THE MONTH WILL BE CURRENT MONTH AND YEAR

)=>{

    const firstDateOfTheMonth= dayjs().year(year).month(month).startOf("Month");
    const lastDateOfTheMonth= dayjs().year(year).month(month).endOf("Month");
    // THIS IS FOR GENRATING THE FIRST AND LAST DATES OF THE MONTH

    const arrayOfDate =[];

    // NOW TO create THE PREFIX DATE or previous months dates

    for (let i=0;i<firstDateOfTheMonth.day();i++){
        arrayOfDate.push({
            currentMonth:false,
            date: firstDateOfTheMonth.day(i)
        });
    } 

    // date= first date of month is done for highlighting the todays date or any date that you select

    // to genrate the current date 

    for (let i = firstDateOfTheMonth.date(); i<=lastDateOfTheMonth.date(); i++){
        arrayOfDate.push({
            currentMonth:true,
            date:firstDateOfTheMonth.date(i),
            today:
            firstDateOfTheMonth.date(i).toDate().toDateString()===dayjs().toDate().toDateString(),
        });
    }

    // to genrate the suffix date of the next month 

    const remaining= 42-arrayOfDate.length;

    // formula for counting the remaing days of the next month

    for(let i=lastDateOfTheMonth.date()+1; i<=lastDateOfTheMonth.date()+remaining;i++)
        {
            arrayOfDate.push({
                currentMonth:false,
                date: firstDateOfTheMonth.day(i)
            });

        }

    return arrayOfDate;
};

export const months= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


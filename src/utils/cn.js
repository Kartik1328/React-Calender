export default function cn(...classes){
    return classes.filter(Boolean).join(" ");
}

// This file is basically useful to write conditions in our calender for dates etc
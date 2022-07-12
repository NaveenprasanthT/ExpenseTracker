const formDate = (date) =>{
     const d = new Date(date);
     let day = `${d.getDate()}`;
     let month = `${d.getMonth()}`;
     const year = `${d.getFullYear()}`

     if(month.length < 2) {
        month = `0${d.getMonth() + 1}`;
     }

     if(day.length < 2) {
        day = `0${d.getDate()}`;
     }

     return [year,month,day].join("-")
}
export default formDate;
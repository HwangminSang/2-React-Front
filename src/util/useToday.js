import moment from "moment";

export default function useToday(){

    let year = moment(new Date()).format("yyyy");
    let month = moment(new Date()).format("MM");
    //let date = moment(new Date()).format("DD");
    let toDay = moment(new Date()).format("yyyy-MM-DD");
    let monthFirstDay = year + "-" + month + "-01";

    return [toDay,monthFirstDay]
}
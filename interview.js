/*
I found a new technical interview question, that I find is a nice test for problem solving. If you guys are curious, here is what it looks like: 
Let’s say we have a website and we keep track of what pages customers are viewing, for things like business metrics.
Every time somebody comes to the website, we write a record to a log file consisting of Timestamp, PageId, CustomerId. At the end of the day we have a big log file with many entries in that format. And for every day we have a new file.
Now, given two log files (log file from day 1 and log file from day 2) we want to generate a list of ‘loyal customers’ that meet the criteria of: (a) they came on both days, and (b) they visited at least two unique pages.
A good way to test problem solving skills for candidates  [🙂]  Or maybe for Data Engineers that want to stay sharp  [😉] 
*/

let logFiles = {
        DayOne: {
                timeStamp: "2024-09-07 09:41:18 CDT",
                PageId: ["Home"],
                CustomerId: ["001", '002', '010']

        },
        DayTwo: {
                timeStamp: "2024-09-08 09:41:18 CDT",
                PageId: ["Home", "About Us", "Cart"],
                CustomerId: ["001", '078', '011']

        }
}

const loyalCustomer = (logFiles) => {
        let loyalCustomerId = ''

}

console.log(loyalCustomer(logFiles))
// let a=[10,20,30,40,50,2,3,4,5,9]

// console.log(a)

// // -----------------------------filter
// let arr1=a.filter(a =>{
//     return a<10;
// })
// console.log(arr1)

//------------------------------best example of filter
//--------------------------------array of books jisme bahut sara objects hai

const books=[
    {title:`book one`, genre:`friction`, publish:1981, edition:2004},
    {title:`book two`, genre:`non-friction`, publish:1988, edition:2001},
    {title:`book three`, genre:`historical`, publish:1992, edition:2007},
    {title:`book four`, genre:`friction`, publish:1988, edition:1999},
    {title:`book five`, genre:`historical`, publish:2001, edition:2006},
    {title:`book six`, genre:`political`, publish:1781, edition:1992},
    {title:`book seven`, genre:`non-friction`, publish:1881, edition:2002},
    {title:`book eight`, genre:`political`, publish:1997, edition:2004},
    {title:`book nine`, genre:`science`, publish:1788, edition:2003},
    {title:`book ten`, genre:`political`, publish:1971, edition:1992},
];

// console.log(books[4]);
// print all user books

// const userbook=forEach(books.title)


// const userbooks=books.filter((a)=> a.genre==='historical')
// console.log(userbooks)

// ----------------------------------or


// ---------------------------filter books which are historical
// const userbook=books.filter((a)=>{
//     return a.genre===`historical`;
// })
// console.log(userbook)

// ---------------------------books which are published before 2000
// const published=books.filter((p)=>{
//     return p.publish>2000;
// })
// console.log(published);

// ---------------------------------books published after 1990 and historical
// const fixed=books.filter((fp)=>{
//     return fp.publish>1990 && fp.genre==='historical'
// });
// console.log(fixed);
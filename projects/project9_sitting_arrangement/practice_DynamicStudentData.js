const generateStudentRecord = () => {

    let arr=[];
    let sub=["C", "C++", "JAVA", "JAVA SCRIPT", "PYTHON"];
    let S1_total=0, S2_total=0, S3_total=0, S4_total=0, S5_total=0;

    for(let i=0; i<=50; i++)
    {
        let rand=Math.floor(Math.random() * sub.length);

        switch(rand)
        {
            case 0:
                S1_total++;

                arr.push({
                    Roll: `S000${S1_total}`,
                    Subject: sub[rand]
                });
                break;
                
            case 1:
                S2_total++;

                arr.push({
                    Roll:`S000${S2_total}`,
                    Subject:sub[rand]
                });
                break;

            case 2:
                S3_total++;

                arr.push({
                    Roll:`S000${S3_total}`,
                    Subject:sub[rand]
                });
                break;

            case 3:
                S4_total++;

                arr.push({
                    Roll:`S000${S4_total}`,
                    Subject:sub[rand]
                });
                break;

            default:
                S5_total++;
                arr.push({
                    roll: `S000${S5_total}`,
                    subject: sub[rand]
                })

        }
    }
// console.log(arr)
return arr;
}

// module.exports=generateStudentRecord;
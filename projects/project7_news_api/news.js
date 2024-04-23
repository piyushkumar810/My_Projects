


const count="Country";
document.body.onload=async(e)=>
{

    var url = 'https://newsdata.io/api/1/news?apikey=pub_39709d551eae249552e60aa7430f51c3e3f14&q=india&country=in&language=en&category=science';
    
              let news=await fetch(url);
              let result=await news.json();

        

              console.log(result);
            //   console.log(result.results[1]);
        for(let i=0;i<result.results.length;i++)
        {
            try{
                let ParentBox=document.querySelector("ul");
            // console.log(ParentBox);

            let DynamicNews=document.createElement("li")
            // console.log(DynamicNews);

            let DynamicImage=document.createElement("img")
            // console.log(DynamicImage);

            let DynamicCountry=document.createElement("h2")
            // console.log(DynamicCountry);

            let DynamicCategory=document.createElement("h3")
            // console.log(DynamicCategory);

            let DynamicTitle=document.createElement("i")
            // console.log(DynamicTitle);

            let DynamicContent=document.createElement("p")
            // console.log(DynamicContent);

            let DynamicLink=document.createElement("a")
            // console.log(DynamicLink);



            ParentBox.append(DynamicNews);
            console.log("---------aaya")
            DynamicNews.classList.add(`cards${i}`);
            // console.log("-------------------------is it working--------------")

// --------------------------------img
            DynamicNews.append(DynamicImage);
            DynamicImage.classList.add(`news_images${i}`);

            if(result.results[i]["image_url"]==null)
            {
                DynamicImage.src=[`no_img.png`]
                // DynamicImage.style.width
            }
            else{
                DynamicImage.src=result.results[i]["image_url"]
            }

// -----------------------------------h2
            DynamicImage.after(DynamicCountry);
            DynamicCountry.setAttribute("class",`news_heading${i}`);
            
            // DynamicCountry.innerHTML=`${i} Country`
            DynamicCountry.innerHTML=result.results[i]["country"]
            // console.log("------------------------------now working")

// --------------------------------------h3
            DynamicCountry.after(DynamicCategory);
            DynamicCategory.setAttribute(`class`,`news-category${i}`);
            console.log(result.results[i]["category"]);
            DynamicCategory.innerText=result.results[i]["category"]

// ---------------------------------------i
            DynamicCategory.after(DynamicTitle);
            DynamicTitle.setAttribute(`class`,`news-title${i}`);
            DynamicTitle.innerHTML=result.results[i]["title"]

// -----------------------------------------p
            DynamicTitle.after(DynamicContent);
            DynamicContent.setAttribute(`class`,`news-content${i}`);
            // DynamicContent.innerHTML=result.results[i]["description"]
            if(result.results[i]["description"]==null)
            {
                // let about_yourself=document.createElement("textarea")
                // about_yourself.rows=4;

                DynamicContent.innerHTML="this page will help you to collect or gather information in every fieldso please read it dont move from here ! thanku for visiting this site "
            }
            else{
                DynamicContent.innerHTML=result.results[i]["description"]
            }

// ---------------------------------------a
            DynamicContent.after(DynamicLink);
            DynamicLink.setAttribute(`class`,`news_link${i}`)
            DynamicLink.href=result.results[i]["link"]
            DynamicLink.innerText="Click here for official link"


            
//             console.log("**************  "+i+"  ************");
            
            
            if(result.results[i]["description"]==null)
            {
                console.log("Sorry");
            }
            else
            {
                console.log(result.results[i]["description"])
            }
            console.log(result.results[i]["category"])
            console.log(result.results[i]["country"])
            console.log(result.results[i]["link"])
            console.log(result.results[i]["title"])

            }catch(error)
            {
                console.log(error)
            }

            
        }
             // result.results[i]["title"]  // result['results'][i]["title"]

}
const main=document.getElementById("con")

 fetch('https://randomuser.me/api/')
 .then( function (res)
 {
    console.log(res)
    if(res.ok==true)
    {
       return res.json()
       .then(function (data)
       {
        console.log(data.results)
        const ar=data.results
        
        const div=document.createElement('div')
      div.classList.add('card')
        const img=document.createElement('img')
        img.src=ar[0].picture['large']
        img.alt="photo"
        const name=document.createElement('h1')
        name.textContent=ar[0].name['title']+" "+ar[0].name['first']+" "+ar[0].name['last']
        const gen=document.createElement('p')
        gen.textContent=ar[0].gender

        const phno=document.createElement('p')
        phno.textContent="📞"+ar[0].phone
        const mail=document.createElement('p')
        mail.textContent="✉️"+ar[0].email
        const addr=document.createElement('p')
        addr.textContent='🏠'+ar[0].location['state']+", "+ar[0].location['country']
        div.append(img,name,gen,phno,mail,addr)
        main.append(div)


       })
    }
    
 })
 
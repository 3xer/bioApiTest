const textBody = document.getElementById("contentBody");
const navMenu = document.querySelectorAll(".nav-items");
const pagesArray = [];

const openContact = {
    title: "Öppettider & Kontakt",
    textContent: `
    <section id="content-text" class="content-text">
    <h2>ÖPPETTIDER</h2>
    <p>Måndag till fredag: 13.30-23.00</p>
    <p>Lördag och söndag 12.30-23.00</p>
    </section>
    
    <section class="content-text">
    <h2>ÖPPETTIDER UNDER JUL & NYÅR</h2>
    <p>23 december: 12-19</p>
    <p>24 december: Stängt</p>
    <p>25-30 december: 12-23</p>
    <p>31 december: 16.30-18</p>
    <p>1 januari: 14-23</p>
    <p>2-8 januari: 12-23</p>
    </section>
    
    <section class="content-text">
    <h2>TELEFONTIDER</h2>
    <p>På grund av säsongens höga belastning har vi just nu stängt av telefonen. Skicka gärna ditt ärende till vår melj info@sundsvallspegeln.se, så hjälper vi dig så fort vi kan.</p>
    </section>
    
    <section class="content-text">
    <h2>KONTAKT</h2>
    <p>KASSAN - info@sundsvallspegeln.se</p>
    </section>
    
    <section class="content-text">
    <h2>ÄR DU INTRESSERAD AV ATT HYRA SPEGELN?</h2>
    <p>Skicka din hyresförfrågan till John Doe som innehåller svar på följande frågor:</p>
    <p>-Beskriv arrangemanget<br>-Vilka är ni?<br>-Datumförslag<br>-Antal timmar/kvällstid eller dagtid?<br>-Tekniska förutsättningar?<br>-Öppet eller slutet evenemang?</p>
    <p>Du kan melja svaren till johndoe@sundsvallspegeln.se</p>
    </section>
    
    <section class="content-text">
    <h2>PRESSVISNINGAR</h2>
    <p>Skicka din förfrågan till John Doe via johndoe@sundsvallspegeln.se</p>
    </section>`
};

pagesArray.push(openContact)

navMenu.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        for (let i = 0; i < pagesArray.length; i++) {
            if (e.target.innerText.includes(pagesArray[i].title)) {
                textBody.innerHTML = pagesArray[i].textContent;
            }
            else {
                textBody.innerHTML = "";
            }
        }
    })
})

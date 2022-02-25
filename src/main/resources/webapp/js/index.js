const URL =  window.location.protocol + '//' + window.location.host +  '/BoundedContext/';

//const URL =  'http://lin587.dillinger.de:7000/BoundedContext/'

function createInfoPageDiv(){
    
      // Creates a container for the Information Page
      const infoPageDiv = document.createElement("div");
      infoPageDiv.className = "infoPage";

      // Creates a container for the header of the Information Page
      const infoPageHeaderDiv = document.createElement("div");
      infoPageHeaderDiv.className = "infoPageHeader";

      infoPageDiv.appendChild(infoPageHeaderDiv);

      //Creates a container for the Status information
      const infoPageStatusDiv = document.createElement("div");
      infoPageStatusDiv.className = "infoPageStatus";

      infoPageDiv.appendChild(infoPageStatusDiv);

      const statusTitle = document.createElement("h1");
      statusTitle.innerHTML = "STATUS";
      infoPageStatusDiv.appendChild(statusTitle);

      // Creates a container for the header of the Status information
      const infoPageStatusHeaderDiv = document.createElement("div");
      infoPageStatusHeaderDiv.className = "infoPageStatusHeader";

      infoPageStatusDiv.appendChild(infoPageStatusHeaderDiv);

      const infoPageStatusContentDiv = document.createElement("div");
      infoPageStatusContentDiv.className = "infoPageStatusContent";

      infoPageStatusDiv.appendChild(infoPageStatusContentDiv);


      // Creates a container for the Config information
      const infoPageConfigDiv = document.createElement("div");
      infoPageConfigDiv.className = "infoPageConfig";

      infoPageDiv.appendChild(infoPageConfigDiv);

      const configTitle = document.createElement("h1");
      configTitle.innerHTML = "CONFIG";
      infoPageConfigDiv.appendChild(configTitle);

      const infoPageConfigHeaderDiv = document.createElement("div");
      infoPageConfigHeaderDiv.className = "infoPageConfigHeader";

      infoPageConfigDiv.appendChild(infoPageConfigHeaderDiv);


      const infoPageConfigContentDiv = document.createElement("div");
      infoPageConfigContentDiv.className = "infoPageConfigContent";

      infoPageConfigDiv.appendChild(infoPageConfigContentDiv);

      document.body.appendChild(infoPageDiv);
}

function createInformationDiv(){
      //creates a container for the Information
      const informationDiv = document.createElement("div");
      informationDiv.className = "information";

      const informationDescriptionText = document.createElement("p");
      informationDescriptionText.className = "informationDescription";

      informationDiv.appendChild(informationDescriptionText);

      const informationContentText = document.createElement("p");
      informationContentText.className = "informationContent";

      informationDiv.appendChild(informationContentText);

      return informationDiv;
}

// writes the creates an informationDiv at the location of the first object with the specified class name and fills in the description and content
function writeInformation(className, description, information){
      const  informationDiv = createInformationDiv();
      informationDiv.getElementsByClassName("informationDescription")[0].innerHTML = description;

      informationDiv.getElementsByClassName("informationContent")[0].innerHTML = information;

      document.body.getElementsByClassName(className)[0].appendChild(informationDiv);

}
function updateInfoPage(){
      Promise.all([
          fetch(URL + 'getContextVersion'),
          fetch(URL + 'getDiagnostics'),
          fetch(URL + 'getJexxaVersion'),
          fetch(URL + 'uptime')
      ]).then(function (responses){
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                  return response.json();
            }));
      }).then(function (data){

            // if the object is encased in an Array, the Array is stripped
             data = data.map(function (element){
                   if(Array.isArray(element)){
                         element = element[0];
                   }
                   return element;
             })


            writeInformation("infoPageHeader", "Project Name:", data[0].projectName);
            writeInformation("infoPageStatusContent", "Context Version:", data[0].version);
            writeInformation("infoPageStatusContent", "Last status check:", new Date(data[1].timestamp.seconds *1000 + data[1].timestamp.nanos /1000000 ));
            writeInformation("infoPageStatusContent", "Status message:", data[1].statusMessage);
            writeInformation("infoPageStatusContent", "Uptime:", secondsToHms(data[3].seconds + data[3].nanos /1000000000));
            writeInformation("infoPageConfigContent", "Jexxa version:", data[2].version);

      }).catch(function(error){
            console.log(error);
      });
}
function secondsToHms(r) {
      r = Number(r);
      let d = Math.floor(r / 3600 / 24);
      let h = Math.floor(r / 3600);
      let m = Math.floor(r % 3600 / 60);
      let s = Math.floor(r % 3600 % 60);

      let dDisplay = d > 0 ? d + (d === 1 ? " Day, " : " Days, ") : "";
      let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
      let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
      let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
}

window.onload = function() {
    createInfoPageDiv();
    updateInfoPage();
};

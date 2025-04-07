function handleNotification (notificationClass, heighLighterClass, message) {
    const notification = document.querySelector(".notification");
    const heightLighter = document.querySelector(".heighLighter");
    const messageDisplayer = document.querySelector(".message");
     if(!notification || !heightLighter  || !messageDisplayer) {
         return console.log("One or more elements needed");
     }

    if(notificationClass && heighLighterClass && message){
         notification.classList.add(notificationClass);
         heightLighter.classList.add(heighLighterClass);
         messageDisplayer.textContent = message.slice(0, 40) + "...";
         setTimeout(() => {
              notification.classList.remove(notificationClass);
         }, 2000)
    }
    return; 
}

export { handleNotification };
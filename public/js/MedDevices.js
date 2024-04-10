export class MedDevices {
    constructor(srcPic, description, status, srcNotification) {
        this.srcPic = srcPic;
        this.description = description;
        this.status = status;
        this.srcNotification = srcNotification;
    }

    render() {
        const parent = document.querySelector('ul.content__items');
        //console.log(parent);
        const element = document.createElement('li');
        element.classList.add('content__item');
        element.innerHTML = `
            <div class="content__part">
                <img src=${this.srcPic} alt=""/>
                <p>
                    ${this.description}
                </p>
            </div>
            <div class="content__part">
                <select name="select_work" id="">
                    <option value="">${this.status}</option>
                </select>

                <img src=${this.srcNotification} alt="" />
            </div>`;
        parent.append(element);
    }
}

new MedDevices(
    './../assets/icons/pH.png',
    'pH-метр Mettler-Toledo International, Inc.SevenCompact S220',
    'Свободен',
    './../assets//icons/noti3.png'
).render();

new MedDevices(
    './../assets/icons/Спектр.png',
    'Спектрофотометр Varian, Inc Cary 50 Bio',
    'Свободен',
    './../assets//icons/noti3.png'
).render();

new MedDevices(
    './../assets/icons/Титратор.png',
    'Титратор',
    'Свободен',
    './../assets//icons/noti.png'
).render();

new MedDevices(
    './../assets/icons/Коагулометр.png',
    'Коагулометр Tcoag, KC 4 Delta',
    'Свободен',
    './../assets//icons/noti2.png'
).render();

new MedDevices(
    './../assets/icons/Коагулометр.png',
    'Коагулометр Tcoag, KC 4 Delta',
    'Свободен',
    './../assets//icons/noti2.png'
).render();

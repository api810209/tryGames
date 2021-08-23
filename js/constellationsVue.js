let vm = new Vue({
    el:'#app',
    data:{
        cloudGo: true,
        formShow: false,
        months:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        dates:[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Constellations:['牡羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天秤座', '天蠍座', '射手座', '魔羯座', '水瓶座', '雙魚座'],
        theMonth:0,
        theDate:1,
        theConstellation:''
    },
    methods:{
        startCheck(){
            document.getElementsByClassName('startMask')[0].attributes['class'].value = 'startMask fadeOut'
            setTimeout(()=>{
                this.cloudGo = false
                this.formShow = true
            },4000)
        },
        theConstellationIs(){
            switch(this.months[this.theMonth]){
                case 1:
                    this.theDate<20? this.theConstellation = this.Constellations[9] : this.theConstellation = this.Constellations[10]
                    break
                case 2:
                    this.theDate<19? this.theConstellation = this.Constellations[10] : this.theConstellation = this.Constellations[11]
                    break
                case 3:
                    this.theDate<21? this.theConstellation = this.Constellations[11] : this.theConstellation = this.Constellations[0]
                    break
                case 4:
                    this.theDate<20? this.theConstellation = this.Constellations[0] : this.theConstellation = this.Constellations[1]
                    break
                case 5:
                    this.theDate<21? this.theConstellation = this.Constellations[1] : this.theConstellation = this.Constellations[2]
                    break
                case 6:
                    this.theDate<21? this.theConstellation = this.Constellations[2] : this.theConstellation = this.Constellations[3]
                    break
                case 7:
                    this.theDate<23? this.theConstellation = this.Constellations[3] : this.theConstellation = this.Constellations[4]
                    break
                case 8:
                    this.theDate<23? this.theConstellation = this.Constellations[4] : this.theConstellation = this.Constellations[5]
                    break
                case 9:
                    this.theDate<23? this.theConstellation = this.Constellations[5] : this.theConstellation = this.Constellations[6]
                    break
                case 10:
                    this.theDate<23? this.theConstellation = this.Constellations[6] : this.theConstellation = this.Constellations[7]
                    break
                case 11:
                    this.theDate<22? this.theConstellation = this.Constellations[7] : this.theConstellation = this.Constellations[8]
                    break
                case 12:
                    this.theDate<22? this.theConstellation = this.Constellations[8] : this.theConstellation = this.Constellations[9]
                    break
            }

            document.getElementsByTagName('form')[0].setAttribute('class', 'formFadeOut')
            setTimeout(()=>{
                this.formShow = false
            },800)
        }
    },
    computed:{
        theDates(){
            return this.dates[this.theMonth]
        },
    }
})
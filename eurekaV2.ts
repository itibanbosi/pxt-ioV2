/* i-o V2  20221216 */


enum onoff {
    ON,
    OFF,
}


enum neoLED_color {
    White,
    Red,
    Yellow,
    Green,
    Blue,
    Orange,
    Indigo,
    Violet,
    Purple,
    Black,
}


let io_neo = neopixel.create(DigitalPin.P9, 3, NeoPixelMode.RGB);


//% color="#ff4500" weight=94 block="iːo"

namespace newio_blocks {



    //% color="#4741f1" weight=89 blockId=neopixel_blue block="Traffic light blue|%mode|" group="1 i:o Neopixel"
    export function neopixel_blue_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#ffa800" weight=86 blockId=neopixel_yellow block="Traffic light yellow|%mode|" group="1 i:o Neopixel"
    export function neopixel_yellow_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#ff4940" weight=84 blockId=neopixel_red block="Traffic light red|%mode|" group="1 i:o Neopixel"
    export function neopixel_red_block(mode: onoff) {
        switch (mode) {
            case onoff.ON:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
                io_neo.show()
                basic.pause(10);
                break;

            case onoff.OFF:
                io_neo.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
                io_neo.show()
                basic.pause(10);
                break;
        }
    }

    //% color="#20b2aa" weight=82 blockId=neopixel_select block="Color LED(s)|%neo_color|,|%neo_number|,on" group="1 i:o Neopixel"
    //% neo_number.min=0 neo_number.max=3
    export function neopixel_select_block(neo_color: neoLED_color, neo_number: number) {
        for (let n = 0; n < 2; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
        switch (neo_color) {
            case neoLED_color.Red:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Red))
                }
                io_neo.show()
                break;
            case neoLED_color.Orange:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Orange))
                }
                io_neo.show()
                break;
            case neoLED_color.Yellow:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Yellow))
                }
                io_neo.show()
                break;
            case neoLED_color.Green:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Green))
                }
                io_neo.show()
                break;
            case neoLED_color.Blue:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Blue))
                }
                io_neo.show()
                break;
            case neoLED_color.Indigo:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Indigo))
                }
                io_neo.show()
                break;
            case neoLED_color.Violet:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Violet))
                }
                io_neo.show()
                break;
            case neoLED_color.Purple:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Purple))
                }
                io_neo.show()
                break;
            case neoLED_color.White:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.White))
                }
                io_neo.show()
                break;
            case neoLED_color.Black:
                for (let n = 0; n < neo_number; n++) {
                    io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
                }
                io_neo.show()
                break;
        }
    }
    //% color="#9400d3" weight=81 blockId=neopixel_reinbow block="RGB on" group="1 i:o Neopixel"
    export function neopixel_rainbow() {
        io_neo.showRainbow(1, 180)
    }




    //% color="#cd853f" weight=80 blockId=neopixel_erace block="Color LED(s) off" group="1 i:o Neopixel"
    export function neopixel_erace_block() {
        for (let n = 0; n < 3; n++) {
            io_neo.setPixelColor(n, neopixel.colors(NeoPixelColors.Black))
        }
        io_neo.show()
    }



    //% color="#1E90FF" weight=83 block="Wait time (sec)|%second|" group="1 i:o Neopixel"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }


    //% color="#a0522d" weight=36 block="Human in motion" group="2 i:o Human detecting sensor"
    export function IO_humanDetection(): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=IO_human block="human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human(): number {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P14);
    }

    //% color="#a0522d"  weight=79 blockId=IO_human_DISP block="Show human detecting sensor binary" group="2 i:o Human detecting sensor"
    export function IO_human_DISP() {

        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
    }

    //% color="#009A00"  weight=81 blockId=microbit2_decideLight block="Light sensor value darker than|%limit|" group="3 micro:bit light sensor"
    //% limit.min=0 limit.max=100
    export function microbit2_decideLight(limit: number): boolean {
        if (input.lightLevel() / 254 * 100 < limit) {
            return true;
        } else {
            return false;
        }
    }



    //% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="Light sensor value" group="3 micro:bit light sensor"
    export function microbit2_denkitemp(): number {

        return Math.round(input.lightLevel() / 254 * 100);

    }


    //% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="Show light sensor values" group="3 micro:bit light sensor"
    export function microbit2_denkiLED() {
        basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
    }


    //% color="#696969" weight=58 blockId=IO_relay block="Relay (digital) write|%mode|" group="4 i:o Relay control"
    export function IO_relay(mode: onoff) {
        switch (mode) {
            case onoff.ON: {
                return pins.digitalWritePin(DigitalPin.P8, 1);
            }
            case onoff.OFF: {
                return pins.digitalWritePin(DigitalPin.P8, 0);
            }
        }
    }
    //% color="#696969" weight=56 blockId=IO_relay_2 block="Relay (analog) write|%syuturyoku|" group="4 i:o Relay control"
    //% syuturyoku.min=0 syuturyoku.max=1023
    export function IO_relay_2(syuturyoku: number) {
        return pins.analogWritePin(AnalogPin.P8, syuturyoku);
    }
}

// ここにコードを追加します

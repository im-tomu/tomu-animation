window.onload = function() {
    let t = document.getElementById('antennaTop');
    let w = document.getElementById('wire');
    let s = new Snap(t);
    let ws = new Snap(w);
    let straight = "m 103,28 c 0,0 0,14 0,23 h 10 c 0,-10 0,-23 0,-23 z";
    let bent = "m 115,28 c 0,0 -12,14.4 -12,23 0,3.3 10,3 10,0 0,-9 9.8,-18.8 9.8,-18.8 z";
    let bentLeft = "m 95,33 c 0,0 8,9.4 8,18 0,3.3 10,3 10,0 0,-9 -10,-23 -10,-23 z";
    let bbox = s.getBBox();
    function right() {
        s.animate({transform:'T15,1 R20,'+bbox.cx+','+bbox.cy}, 500, mina.easein, fromRight);
        ws.animate({d:bent}, 500, mina.easein);
    }
    function fromRight() {
        s.animate({transform:'T0,0 R0,'+bbox.cx+','+bbox.cy}, 500, mina.easeout, left);
        ws.animate({d:straight}, 500, mina.easeout);
    }
    function left() {
        s.animate({transform:'T-15,1 R-20,'+bbox.cx+','+bbox.cy}, 500, mina.easein, fromLeft);
        ws.animate({d:bentLeft}, 500, mina.easein);
    }
    function fromLeft() {
        s.animate({transform:'T0,0 R0,'+bbox.cx+','+bbox.cy}, 500, mina.easeout, right);
        ws.animate({d:straight}, 500, mina.easeout);
    }
    right()
    let nonFeet = Snap.select('#nonFeet');
    let nonFeetBbox = nonFeet.getBBox();
    function bodyBackDown() {
        let delay = Math.random()*500;
        nonFeet.animate({transform:'T0,0 R0,'+nonFeetBbox.cx+','+nonFeetBbox.cy}, 600, mina.easeinout, () => setTimeout(bodyUp, delay));
    }
    function bodyUp() {
        let angle = (Math.random()-0.5)*1.5;
        nonFeet.animate({transform:'T0,-1.5 R'+angle+','+nonFeetBbox.cx+','+nonFeetBbox.cy}, 600, mina.easeinout, bodyBackDown);
    }
    bodyUp();
    let leftEye = Snap.select('#leftEye');
    let rightEye = Snap.select('#rightEye');
    function blink() {
        let delay = Math.random()*2500+1000;
        setTimeout(() => {
            rightEye.animate({transform:'S1,0.2'}, 40, mina.linear);
            leftEye.animate({transform:'S1,0.2'}, 40, mina.linear, () => {
                leftEye.animate({transform:'S1,1'}, 40, mina.linear, blink);
                rightEye.animate({transform:'S1,1'}, 40, mina.linear);
            });
        }, delay);
    }
    blink();

    function lookSide() {
        let delay = Math.random()*2500+2000;
        setTimeout(() => {
            let dx = Math.floor(Math.random()*2)*8-4;
            rightEye.animate({transform:'T'+dx+',0'}, 120, mina.linear);
            leftEye.animate({transform:'T'+dx+',0'}, 120, mina.linear, () => {
                setTimeout(()=> {
                    leftEye.animate({transform:'T0,0'}, 120, mina.linear, lookSide);
                    rightEye.animate({transform:'T0,0'}, 120, mina.linear);
                }, 1200)
            });
        }, delay);
    }
    lookSide();
    let neutralRightArm = "m 160,106 0,9.5 c 23.5,0 42.8,-21.2 42.7,-54 l -8.2,0 c 0,31.7 -15,43 -34.5,44 z";
    let leftRightArm = "m 160,106 v 9.5 c 23.5,0 25.8,-23 25.7,-55.7 l -8.5,0.5 C 177.3,92 180,104.5 160,105.5 Z";
    let rightArm = Snap.select('#rightArm');
    let rightHand = Snap.select('#rightHand');
    let waveSpeed = 150;
    function wave() {
        let delay = Math.random() * 3500 + 5000;
        setTimeout(() => {
            rightHand.animate({transform:'T-18,-4 R-10'}, waveSpeed, mina.easeout);
            rightArm.animate({d:leftRightArm}, waveSpeed, mina.linear, () => {
                rightHand.animate({transform:'T3,3 R10'}, waveSpeed, mina.linear);
                rightArm.animate({d:neutralRightArm}, waveSpeed, mina.linear, () =>{
                    rightHand.animate({transform:'T-18,-4 R-10'}, waveSpeed, mina.linear);
                    rightArm.animate({d:leftRightArm}, waveSpeed, mina.linear, () => {
                        rightHand.animate({transform:'T3,3 R10'}, waveSpeed, mina.linear);
                        rightArm.animate({d:neutralRightArm}, waveSpeed, mina.linear, () =>{
                            rightHand.animate({transform:'T-18,-4 R-10'}, waveSpeed, mina.linear);
                            rightArm.animate({d:leftRightArm}, waveSpeed, mina.linear, () => {
                                rightHand.animate({transform:'T3,3 R10'}, waveSpeed, mina.linear);
                                rightArm.animate({d:neutralRightArm}, waveSpeed, mina.linear, wave);
                            });
                        });
                    });
                });
            });
        }, delay);
    }
    wave();
}
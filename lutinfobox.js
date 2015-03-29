/* lutinfobox.js
* LUTCalc / Gamma / Gamut information UI objects for the LUTCalc Web App.
* 7th October 2014
*
* LUTCalc generates 1D and 3D Lookup Tables (LUTs) for video cameras that shoot log gammas, 
* principally the Sony CineAlta line.
*
* By Ben Turley, http://turley.tv
* First License: GPLv2
* Github: https://github.com/cameramanben/LUTCalc
*/
function LUTInfoBox(fieldset,inputs,message) {
	this.box = document.createElement('fieldset');
	this.inputs = inputs;
	this.message = message;
	this.p = 6;
	this.message.addUI(this.p,this);
	this.instructionsBut = document.createElement('input');
	this.gammaInfoBut = document.createElement('input');
	this.gammaChartBut = document.createElement('input');
	this.buildBox();
	fieldset.appendChild(this.box);
}
// Construct the UI Box
LUTInfoBox.prototype.buildBox = function() {
	this.instructionsBut.setAttribute('type','button');
	this.instructionsBut.value = 'Instructions';
	this.instructionsBox = document.createElement('div');
	this.instructions();
	this.instructionsBox.style.display = 'none';
	this.gammaInfoBut.setAttribute('type','button');
	this.gammaInfoBut.value = 'Log Info';
	this.gammaInfoBox = document.createElement('div');
	this.gammaInfo();
	this.gammaInfoBox.style.display = 'none';
	this.gammaChartBut.setAttribute('type','button');
	this.gammaChartBut.value = 'Charts';
	this.gammaChartBox = document.createElement('div');
	this.gammaChart();
	this.gammaChartBox.style.display = 'block';
	this.box.appendChild(this.instructionsBut);
	this.box.appendChild(this.gammaInfoBut);
	this.box.appendChild(this.gammaChartBut);
	this.box.appendChild(this.instructionsBox);
	this.box.appendChild(this.gammaInfoBox);
	this.box.appendChild(this.gammaChartBox);
}
LUTInfoBox.prototype.instructions = function() {
	this.instructionsBox.setAttribute('class','graybox infobox');
	this.createMainscreen();
	this.instructionsBox.appendChild(this.mainscreen);
	this.createCamInfo();
	this.instructionsBox.appendChild(this.insCam);
	this.createGamInfo();
	this.instructionsBox.appendChild(this.insGam);
	this.createTwkInfo();
	this.instructionsBox.appendChild(this.insTwk);
	this.createLutInfo();
	this.instructionsBox.appendChild(this.insLut);
	this.createPreInfo();
	this.instructionsBox.appendChild(this.insPre);
	this.createGenInfo();
	this.instructionsBox.appendChild(this.insGen);
	this.createInfInfo();
	this.instructionsBox.appendChild(this.insInf);
	this.setupEvents();
}
LUTInfoBox.prototype.showMainscreen = function() {
	this.hideAll();
	this.mainscreen.style.display = 'block';
}
LUTInfoBox.prototype.showCamInfo = function() {
	this.hideAll();
	this.insCam.style.display = 'block';
}
LUTInfoBox.prototype.showGamInfo = function() {
	this.hideAll();
	this.insGam.style.display = 'block';
}
LUTInfoBox.prototype.showCustscreen = function() {
	this.hideAll();
	this.insTwk.style.display = 'block';
}
LUTInfoBox.prototype.showLutInfo = function() {
	this.hideAll();
	this.insLut.style.display = 'block';
}
LUTInfoBox.prototype.showPreInfo = function() {
	this.hideAll();
	this.insPre.style.display = 'block';
}
LUTInfoBox.prototype.showGenInfo = function() {
	this.hideAll();
	this.insGen.style.display = 'block';
}
LUTInfoBox.prototype.showInfInfo = function() {
	this.hideAll();
	this.insInf.style.display = 'block';
}
LUTInfoBox.prototype.hideAll = function() {
	this.mainscreen.style.display = 'none';
	this.insCam.style.display = 'none';
	this.insGam.style.display = 'none';
	this.insTwk.style.display = 'none';
	this.insLut.style.display = 'none';
	this.insPre.style.display = 'none';
	this.insGen.style.display = 'none';
	this.insInf.style.display = 'none';
}
LUTInfoBox.prototype.createMainscreen = function() {
	this.mainscreen = document.createElement('div');
	this.mainscreen.setAttribute('class','imagemap');
	this.mainscreen.setAttribute('id','ins-mainscreen');
	var click = document.createElement('p');
	click.appendChild(document.createTextNode('Click an area for information:'));
	this.mainscreen.appendChild(click);
	var header = document.createElement('div');
	header.setAttribute('class','imagemapimg');	
	header.setAttribute('id','ins-main-header');	
	this.mainscreen.appendChild(header);
	var left = document.createElement('div');
	left.setAttribute('id','ins-main-left');
	this.insMainCam = document.createElement('div');
	this.insMainCam.setAttribute('class','imagemapimg');
	this.insMainCam.setAttribute('id','ins-main-cam');
	left.appendChild(this.insMainCam);
	this.insMainGam = document.createElement('div');
	this.insMainGam.setAttribute('class','imagemapimg');
	this.insMainGam.setAttribute('id','ins-main-gam');
	left.appendChild(this.insMainGam);
	this.insMainTwk = document.createElement('div');
	this.insMainTwk.setAttribute('class','imagemapimg');
	this.insMainTwk.setAttribute('id','ins-main-twk');
	left.appendChild(this.insMainTwk);
	var spacer = document.createElement('div');
	spacer.setAttribute('class','imagemapimg');
	spacer.setAttribute('id','ins-main-spacer');	
	left.appendChild(spacer);
	this.mainscreen.appendChild(left);
	var right = document.createElement('div');
	right.setAttribute('id','ins-main-right');
	this.insMainLut = document.createElement('div');
	this.insMainLut.setAttribute('class','imagemapimg');
	this.insMainLut.setAttribute('id','ins-main-lut');
	right.appendChild(this.insMainLut);
	var buttons = document.createElement('div');
	buttons.setAttribute('id','ins-main-buttons');
	this.insMainPre = document.createElement('div');
	this.insMainPre.setAttribute('class','imagemapimg');
	this.insMainPre.setAttribute('id','ins-main-pre');
	buttons.appendChild(this.insMainPre);
	this.insMainGen = document.createElement('div');
	this.insMainGen.setAttribute('class','imagemapimg');
	this.insMainGen.setAttribute('id','ins-main-gen');
	buttons.appendChild(this.insMainGen);
	right.appendChild(buttons);
	this.insMainInf = document.createElement('div');
	this.insMainInf.setAttribute('class','imagemapimg');
	this.insMainInf.setAttribute('id','ins-main-inf');
	right.appendChild(this.insMainInf);
	this.mainscreen.appendChild(right);
	var footer = document.createElement('div');
	footer.setAttribute('class','imagemapimg');	
	footer.setAttribute('id','ins-main-footer');	
	this.mainscreen.appendChild(footer);
}
LUTInfoBox.prototype.createCamInfo = function() {
	this.insCam = document.createElement('div');
	this.insCam.setAttribute('class','instructions');
	this.insCam.setAttribute('id','ins-cam');
	this.insCamBack = document.createElement('input');
	this.insCamBack.setAttribute('type','button');
	this.insCamBack.value = 'Back';
	this.insCam.appendChild(this.insCamBack);
	this.insCamInfo = document.createElement('div');
	this.insCamInfo.setAttribute('class','infotext');
	this.addInfo(this.insCamInfo,false,null,'This box defines which camera model the LUT generated is to be used with.');
	this.addInfo(this.insCamInfo,false,null,'Differing manufacturers take differing approaches to recording log, which primarily effects how exposure corrections are handled.');
	this.addInfo(this.insCamInfo,true,'The Sony Approach','Sony have arguably the most pure approach to log. The entire dynamic range of the camera is captured, with changes in ISO being stored purely as metadata in the clip file.');
	this.addInfo(this.insCamInfo,true,null,'Post production software is then expected to read the metadata and automatically do the exposure adjustment.');
	this.addInfo(this.insCamInfo,true,null,'In practice this does not currently always work, so LUTCalc can be used to create exposure corrected LUTs, eg LC709A with a 1-stop push.');
	this.addInfo(this.insCamInfo,true,null,"Exposure can be entered either as the CineEI ISO value used, or as a stop correction from the base ISO, which is shown as 'Native ISO' next to the camera model.");
	this.addInfo(this.insCamInfo,true,'The Canon Approach','The C300 has popularised log recording with CP Lock, but only records in 8-bit. Log is normally recorded in at least 10-bit, to ensure a broad spread of picture data even after the contrast is increased in post.');
	this.addInfo(this.insCamInfo,true,null,'In order to have a reasonable result in the midtones and highlights, C-Log spreads information very thinly in the shadows. Storing exposure shifts as metadata and performing the adjustment in post would work very badly when pushing to increase the ISO, so Canon bakes in the exposure shift.');
	this.addInfo(this.insCamInfo,true,null,'Consequently, the full dynamic range of the camera is only captured at the base ISO.');
	this.addInfo(this.insCamInfo,true,null,"LUTCalc allows you to generate exposure shifts, but as the ISO is arbitrary, it only shows the 'exposure correction' option for the Cine EOS cameras. LUTs for the C300 will also be appropriate for the C100 and C500");
	this.addInfo(this.insCamInfo,true,'The Arri Approach','Somewhere between the other two, in LogC Arri adjusts the log parameters with ISO, incorporating a slight knee at high ISOs. Combined with higher bit depths than in the C300, this means that the full dynamic range is always captured.');
	this.insCam.style.display = 'none';
	this.insCam.appendChild(this.insCamInfo);
}
LUTInfoBox.prototype.createGamInfo = function() {
	this.insGam = document.createElement('div');
	this.insGam.setAttribute('class','instructions');
	this.insGam.setAttribute('id','ins-gam');
	this.insGamBack = document.createElement('input');
	this.insGamBack.setAttribute('type','button');
	this.insGamBack.value = 'Back';
	this.insGam.appendChild(this.insGamBack);
	this.insGamInfo = document.createElement('div');
	this.insGamInfo.setAttribute('class','infotext');
	this.addInfo(this.insGamInfo,false,null,'This box is used to set the transfer function and colour space that the camera records to and the basic combination that the LUT is intended to output.');
	this.addInfo(this.insGamInfo,false,null,"The menus refer to 'Gamma' and 'Gamut' as these terms are in common use and generally understood in the context, though the accurate terms should be 'Transfer Function' and 'Colour Space'.");
	this.addInfo(this.insGamInfo,false,null,'There are four types of transfer function offered:');
	this.addInfo(this.insGamInfo,true,'Log Curves','These are designed to spread picture information evenly between stops and are how cameras are able to capture high dynamic range within limited bit depth whilst allowing extensive manipulation in post.');
	this.addInfo(this.insGamInfo,true,null,'They are not intended to be used uncorrected, appearing very flat and dull. For this reason they are also not very suitable for setting exposures to. Examples are S-Log, S-Log2 and S-Log3 on Sony cameras, C-Log on Canon cameras and LogC on Arris.');
	this.addInfo(this.insGamInfo,true,'Linear And Gamma Curves',"These are offered when 'Linear/Rec709' is selected in the gamma boxes. Pure linear is effectively the sensor response of the camera; the value is proportional to the number of photons hitting the sensor.");
	this.addInfo(this.insGamInfo,true,null,'Displays generally expect the linear signal to be adjusted with a power function, raising the linear value in relation to a power known as the gamma. sRGB is common in computing and photography, Rec709 is the standard for HDTV and Rec2020 is a slight refinement of Rec709 for UHDTV and deeper bit depths.');
	this.addInfo(this.insGamInfo,true,'Creative Curves','These are curves which are not defined by standards, though generally relate to them. An example is Rec709(800%) which is a Sony interpretation of Rec709 with a smooth knee to extend the dynamic range captured to 800% IRE at a recording level of 109%. These are the main choices for useful camera gammas.');
	this.addInfo(this.insGamInfo,true,'Hybrid Gamma Curves',"These are proposed replacements for the current Rec709/Rec2020 curves as displays become able to produces very wide dynamic ranges. Two, listed as 'ITU Proposal' and 'BBC WHP283' are very similar to Rec709 in the shadows and midtones, but transitioning to a flat log region in the highlights.");
	this.addInfo(this.insGamInfo,true,null,"'Dolby PQ' breaks with backwards compatibility and distributes picture information in a way calculated to hold the maximum possible dynamic range for a given bit depth before effects such as banding become apparent. It appears extraordinarily flat on a Rec709 or sRGB screen.");
	this.addInfo(this.insGamInfo,false,null,'There are two main types of colour space:');
	this.addInfo(this.insGamInfo,true,'Matrix','These are gamuts where a picture can be changed from one to another via a 3x3 matrix performed on linear data. There are capture ones such as the S-Gamuts, Arri Wide Gamut and Canon Cinema Gamut, photometric and intermediate ones such as XYZ and ACES and output gamuts such as Rec709 and Rec2020 (the last two have very similar transfer functions, but the Rec2020 colour space is much wider than the Rec709 one).');
	this.addInfo(this.insGamInfo,true,'LUT','These are ones where the conversion from another colour space is complex and may be irreversible, so LUTCalc stores them as LUTs internally. The advantage is that they can have more complex responses than basic matrices, changing saturation with colour and exposure or tuning the look to favour skin tones or natural greens. Examples include LC709 and LC709A, based on the look profiles produced by Sony.');
	this.addInfo(this.insGamInfo,true,null,'LC709 as a colour space gives a similar though arguably subtler colour response than the basic Rec709 matrix');
	this.insGam.style.display = 'none';
	this.insGam.appendChild(this.insGamInfo);
}
LUTInfoBox.prototype.createTwkInfo = function() {

	this.insTwk = document.createElement('div');
	this.insTwk.setAttribute('class','instructions');
	this.insTwk.setAttribute('id','ins-twk');
	this.insCustBack = document.createElement('input');
	this.insCustBack.setAttribute('type','button');
	this.insCustBack.value = 'Back';
	this.insTwk.appendChild(this.insCustBack);
	var click = document.createElement('p');
	click.appendChild(document.createTextNode('Click an area for information:'));
	this.insTwk.appendChild(click);
	this.custscreen = document.createElement('div');
	this.custscreen.setAttribute('class','imagemap');
	this.custscreen.setAttribute('id','ins-custscreen');
	var header = document.createElement('div');
	header.setAttribute('class','imagemapimg');	
	header.setAttribute('id','ins-cust-header');	
	this.custscreen.appendChild(header);
	this.insCustGam = document.createElement('div');
	this.insCustGam.setAttribute('class','imagemapimg');	
	this.insCustGam.setAttribute('id','ins-cust-gam');	
	this.custscreen.appendChild(this.insCustGam);
	this.insCustBhi = document.createElement('div');
	this.insCustBhi.setAttribute('class','imagemapimg');	
	this.insCustBhi.setAttribute('id','ins-cust-bhi');	
	this.custscreen.appendChild(this.insCustBhi);
	this.insCustCts = document.createElement('div');
	this.insCustCts.setAttribute('class','imagemapimg');	
	this.insCustCts.setAttribute('id','ins-cust-cts');	
	this.custscreen.appendChild(this.insCustCts);
	this.insCustFlc = document.createElement('div');
	this.insCustFlc.setAttribute('class','imagemapimg');	
	this.insCustFlc.setAttribute('id','ins-cust-flc');	
	this.custscreen.appendChild(this.insCustFlc);
	this.insCustCdl = document.createElement('div');
	this.insCustCdl.setAttribute('class','imagemapimg');	
	this.insCustCdl.setAttribute('id','ins-cust-cdl');	
	this.custscreen.appendChild(this.insCustCdl);
	this.insCustLut = document.createElement('div');
	this.insCustLut.setAttribute('class','imagemapimg');	
	this.insCustLut.setAttribute('id','ins-cust-lut');	
	this.custscreen.appendChild(this.insCustLut);
	this.insTwk.style.display = 'none';
	this.insTwk.appendChild(this.custscreen);
}
LUTInfoBox.prototype.createLutInfo = function() {
	this.insLut = document.createElement('div');
	this.insLut.setAttribute('class','instructions');
	this.insLut.setAttribute('id','ins-lut');
	this.insLutBack = document.createElement('input');
	this.insLutBack.setAttribute('type','button');
	this.insLutBack.value = 'Back';
	this.insLut.appendChild(this.insLutBack);
	this.insLutInfo = document.createElement('div');
	this.insLutInfo.setAttribute('class','infotext');
	this.addInfo(this.insLutInfo,false,null,'This is the box where the format of the LUT to be generated is decided.');
	this.addInfo(this.insLutInfo,false,null,"The first option is 'LUT Title / Filename'. As well as being used as the filename for saving the LUT, this appears within the file as the title. This may help keep track of LUTs in case filenames change. LUTCalc will make sure that it is appropriately formatted.");
	this.addInfo(this.insLutInfo,false,null,'LUTCalc produces 1D and 3D LUTs in the cube format:');
	this.addInfo(this.insLutInfo,true,'1D','these are used for contrast control, with each colour channel changed independently.');
	this.addInfo(this.insLutInfo,true,null,'With a 1D LUT it is practical to store every possible 8-bit, 10-bit or 16-bit value. As such the adjustment can be arbitrarily complex, which may well be useful for storing an extensive grade, but with smooth curves such as those built in to LUTCalc and the use of cubic interpolation, considerably fewer control point are needed for an effective result. LUT calc can produce 1024-point (10-bit) and 4096-point (fairly standard shaper LUT size) 1D LUTs.');
	this.addInfo(this.insLutInfo,true,'3D','3D LUTs input combinations of red, green and blue values to reference output values. This allows for sophisticated adjustment of colours across the gamut and exposure range. Where a 1024-point 1D LUT covers every possible 10-bit input value for one channel, a 3D LUT would need to be 1024x1024x1024-point to consider every possible RGB combination.');
	this.addInfo(this.insLutInfo,true,null,'This would be impractically large and complex, so 3D LUTs are generally of a much smaller dimension and use interpolation to obtain intermediate values. LUTCalc can produce 17x17x17, 33x33x33 and 65x65x65 3D cubes, which are the most common 3D sizes.');
	this.addInfo(this.insLutInfo,true,null,'Sony F cameras accept 33x33x33 cubes and this size does a very good job of reproducing the kinds of effects possible in LUTCalc. 65x65x65 is much larger, but gives greater precision for post software where the size is less of an issue.');
	this.addInfo(this.insLutInfo,false,null,'After the dimension settings come the range options. Cube LUTs contain floating point values rather than integers, and generally map 0 to be black and 1 to be white. Values can actually be greater or less than these, but 0 and 1 are the reference points. What 0 and 1 actually represent depends on the video range used.');
	this.addInfo(this.insLutInfo,true,'Legal Range',"10-bit binary can store 1024 different values, in the decimal range 0-1023. In analogue video picture information was stored within a voltage range defined as a percentage 0%-100%. Values just outside were that classed 'super black' and 'super white'.");
	this.addInfo(this.insLutInfo,true,null,"In digital video, 0% IRE has been defined as 10-bit 64 in decimal, with 100% IRE at 10-bit 940. With 'legal range' set 0 in the LUT equates to 0% IRE and 1 equates to 100% IRE. On this scale, 10-bit 0 would be -0.073 and 10-bit 1023 1.095.");
	this.addInfo(this.insLutInfo,true,null,"This is a commonly expected output range in software such as DaVinci Resolve and is the output range of Sony monitor LUTs (MLUTS).");
	this.addInfo(this.insLutInfo,true,'Data Range','this treats the full range of 10-bit values as mapping to the 0-1 LUT range. Technically, the top and bottom couple of values are generally reserved, but for the sake of simplicity that can be ignored here. LUTs can output values outside of the 0-1 range, but can only consider input values within it. If a log recording goes outside of legal range (generally only above 1), then the LUT input needs to be data range to make sure that no data is lost.');
	this.addInfo(this.insLutInfo,true,null,'S-Log2 and Canon C-Log both go above legal range, and for consistency Sony recommends working with S-Log3 set to data range in software such as Resolve. Sony MLUTs are data in, legal out.');
	this.addInfo(this.insLutInfo,false,null,'LUTCalc will generally default to data in, legal out, though if both the input and output gammas are log curves then it will set data in data out, on the assumption that further LUTs or corrections will be applied.');
	this.addInfo(this.insLutInfo,false,null,'It has also been suggested that the Lumetri plugin in Adobe Premiere CC expects data in, data out in order to give the correct look. The best suggestion is to test and compare in the software to be used in post.');
	this.addInfo(this.insLutInfo,false,null,'The final two options relate to clipping output levels.');
	this.addInfo(this.insLutInfo,true,'Camera MLUT (3D, Clip To 0-1.09)','Sony MLUTs expect output values to be within the range 0-1.09, with the ranges data in and legal out. This option ensures that everything is set correctly.');
	this.addInfo(this.insLutInfo,true,'Clip To 0-1.0','The cube file spec allows for output values beyond 0-1. This allows limited dynamic range conversions such as linear or Rec709 to be performed non destructively, ie the overexposed data can still be pulled back into range.');
	this.addInfo(this.insLutInfo,true,null,'Some software does not handle out of range values correctly, so this option hard clips from 0-1.0. This does mean that data outside of that range is lost.');
	this.insLut.style.display = 'none';
	this.insLut.appendChild(this.insLutInfo);
}
LUTInfoBox.prototype.createPreInfo = function() {
	this.insPre = document.createElement('div');
	this.insPre.setAttribute('class','instructions');
	this.insPre.setAttribute('id','ins-gen');
	this.insPreBack = document.createElement('input');
	this.insPreBack.setAttribute('type','button');
	this.insPreBack.value = 'Back';
	this.insPre.appendChild(this.insPreBack);
	this.insPreInfo = document.createElement('div');
	this.insPreInfo.setAttribute('class','infotext');
	var preview = document.createElement('div');
	preview.setAttribute('class','infoimage');
	preview.setAttribute('id','ins-pre');
	this.insPreInfo.appendChild(preview);
	this.addInfo(this.insPreInfo,false,null,"Clicking 'Preview' brings up a test image in place of the LUT options box at the top right. It is displayed legal range and incorporates any adjustments made.");
	this.addInfo(this.insPreInfo,false,null,'LUTCalc includes two test images.');
	this.addInfo(this.insPreInfo,true,'High Contrast','The initial one is high contrast, covering around eleven or twelve stops and with information over 5 1/2 stops above 18% gray.');
	this.addInfo(this.insPreInfo,true,'Low Contrast','This toggles to the second image, which is against greenscreen and stays within the dynamic range of Rec709, with about 2 1/3 stops above 18% gray.');
	this.addInfo(this.insPreInfo,false,null,'Both images include a set of Rec709 75% and 100% primary and secondary boxes, a 16-stop grayscale and a colour chart on the right.');
	this.addInfo(this.insPreInfo,false,null,'The high contrast image also includes colour charts four stops above and below base and the low contrast chart two stops above and below.');
	this.addInfo(this.insPreInfo,false,null,"A png, bmp or jpeg recorded in a known colour space can also be loaded in place of the defaults by clicking 'Load Preview...'.");
	this.addInfo(this.insPreInfo,false,null,"'Large Image' / 'Small Image' toggles between the default small preview image and a larger version which requires scrolling to view the scopes.");
	this.addInfo(this.insPreInfo,false,null,'Above the preview window are the scope options:');
	var scopes = document.createElement('div');
	scopes.setAttribute('class','infoimage');
	scopes.setAttribute('id','ins-pre-scp');
	this.insPreInfo.appendChild(scopes);
	this.addInfo(this.insPreInfo,true,'Waveform','The horizontal axis is the same as the test image, whilst the vertical axis is luma values of all the pixels in that column. The scale lines are blocks of 10% IRE and the full range runs from -7% to +109%.');
	this.addInfo(this.insPreInfo,true,'Vectorscope','This is a polar plot of the image chroma. LUTCalc includes standard 75% and 100% Rec709 boxes (the two rows of green circles). In pure Rec709 75% colour bars should fall dead centre of the inner green circles.');
	this.addInfo(this.insPreInfo,true,null,'In addition there is a set of 75% Rec709 boxes that have been mapped to the current chosen colour space. These are the colour of their associated primary or secondary and will lie inside the green ones.');
	this.addInfo(this.insPreInfo,true,null,'These give a guide to the size and nature of the chosen colour space, and also where a test chart should lie for correcting colour castes without changing colour space.');
	this.addInfo(this.insPreInfo,true,'RGB Parade','Similar to the waveform, but the red, green and blue components are separated horizontally.');
	this.insPre.style.display = 'none';
	this.insPre.appendChild(this.insPreInfo);
}
LUTInfoBox.prototype.createGenInfo = function() {
	this.insGen = document.createElement('div');
	this.insGen.setAttribute('class','instructions');
	this.insGen.setAttribute('id','ins-gen');
	this.insGenBack = document.createElement('input');
	this.insGenBack.setAttribute('type','button');
	this.insGenBack.value = 'Back';
	this.insGen.appendChild(this.insGenBack);
	this.insGenInfo = document.createElement('div');
	this.insGenInfo.setAttribute('class','infotext');
	this.addInfo(this.insGenInfo,false,'Generate','The GO button!');
	this.addInfo(this.insGenInfo,false,null,'In most browsers you will either be given a choice of where to save your LUT, or it will automatically go to the Downloads folder.');
	this.addInfo(this.insGenInfo,false,null,'In some versions of Safari it may just appear in a new browser tab. In that case you will need to save it manually.');
	this.addInfo(this.insGenInfo,false,null,'LUTCalc For Mac allows you to choose the destination for saving.');
	this.addInfo(this.insGenInfo,false,null,"LUTCalc currently generates LUTs in the 'cube' format.");
	this.insGen.style.display = 'none';
	this.insGen.appendChild(this.insGenInfo);
}
LUTInfoBox.prototype.createInfInfo = function() {
	this.insInf = document.createElement('div');
	this.insInf.setAttribute('class','instructions');
	this.insInf.setAttribute('id','ins-inf');
	this.insInfBack = document.createElement('input');
	this.insInfBack.setAttribute('type','button');
	this.insInfBack.value = 'Back';
	this.insInf.appendChild(this.insInfBack);
	this.insInfPic = document.createElement('div');
	this.insInfPic.setAttribute('class','imagemap');
	this.insInfPic.setAttribute('id','ins-inf-pic');
	this.insInf.appendChild(this.insInfPic);
	this.insInfInfo = document.createElement('div');
	this.insInfInfo.setAttribute('class','infotext');
	this.addInfo(this.insInfInfo,false,'Instructions','Hopefully fairly obvious, after all here you are!');
	this.addInfo(this.insInfInfo,false,'Log Info','This shows tables of % IRE and 10-bit values for the main log and gamma curves, plus the current output curve.');
	this.addInfo(this.insInfInfo,false,'Charts','This provides three different ways of comparing input and output levels:');
	this.addInfo(this.insInfInfo,true,'Reflected/IRE','Reflectance levels of the scene (eg 18% gray, 90% white) against % IRE. The simplest chart, but as the x-axis is linear it is hard to read anything meaningful from it.');
	this.addInfo(this.insInfInfo,true,'Stop/IRE','Shows the output level against input stops. Clearly shows the difference between linear/gamma (keep increasing in slope), log curves (tend towards a straight line slope in the highlights and curves with knee (tend towards a horizontal line in the highlights). Also gives a good idea of dynamic range in stops.');
	this.addInfo(this.insInfInfo,true,'LUT In / LUT Out','similar to Stop/IRE, but better shows true black (black is technically minus infinity stops, so Stop/IRE never quite shows it).');
	this.addInfo(this.insInfInfo,false,null,'The charts tab also includes a table of %IRE and 10-bit values for the current curve.');
	this.insInf.style.display = 'none';
	this.insInf.appendChild(this.insInfInfo);
}
LUTInfoBox.prototype.addInfo = function(infoBox,indent,title,text) {
	var para = document.createElement('p');
	if (indent) {
		para.setAttribute('class','indentpara');
	}
	if (typeof title === 'string') {
		var titleText = document.createElement('strong');
		titleText.appendChild(document.createTextNode(title));
		para.appendChild(titleText);
		para.appendChild(document.createTextNode(' - '));
	}
	para.appendChild(document.createTextNode(text));
	infoBox.appendChild(para);
}
LUTInfoBox.prototype.gammaInfo = function() {
	this.tableRefVals = [0,0.18,0.38,0.44,0.9,7.2,13.5];
	this.tableIREVals = [];
	this.gammaInfoBox.setAttribute('class','graybox infobox');
	this.addText(this.gammaInfoBox,'Output gamma including any customisations:');
	var curires = document.createElement('table');
	var curiresHead = document.createElement('thead');
	curiresHead.appendChild(this.addRow(['Reflected %','0','18','38','44','90','720','1350'], 'th'));
	curires.appendChild(curiresHead);
	var curiresBody = document.createElement('tbody');
	var curvarsRow = this.addRow(['10-bit Values','-','-','-','-','-','-','-'],'td');
	this.lutOutVals = curvarsRow.getElementsByTagName('td');
	var curiresRow = this.addRow(['LUTted %IRE','-','-','-','-','-','-','-'],'td');
	this.lutOutIREs = curiresRow.getElementsByTagName('td');
	curiresBody.appendChild(curiresRow);
	curiresBody.appendChild(curvarsRow);
	curires.appendChild(curiresBody);
	this.gammaInfoBox.appendChild(curires);
	this.gammaInfoBox.appendChild(document.createElement('br'));
	var logvars = document.createElement('table');
	var logvarsHead = document.createElement('thead');
	logvarsHead.appendChild(this.addRow(['Gamma','0% Black','18% Grey (20% IRE)','90% White (100% IRE)'], 'th'));
	logvars.appendChild(logvarsHead);
	var logvarsBody = document.createElement('tbody');
	logvarsBody.appendChild(this.addRow(['S-Log3','95','420','598'],'td'));
	logvarsBody.appendChild(this.addRow(['S-Log2','90','347','582'],'td'));
	logvarsBody.appendChild(this.addRow(['S-Log','90','394','636'],'td'));
	logvarsBody.appendChild(this.addRow(['LogC (3&4)','95','400','572'],'td'));
	logvarsBody.appendChild(this.addRow(['LogC (2)','134','400','569'],'td'));
	logvarsBody.appendChild(this.addRow(['C-Log','128','351','614'],'td'));
	logvarsBody.appendChild(this.addRow(['Cineon','95','470','685'],'td'));
	logvars.appendChild(logvarsBody);
	this.addText(this.gammaInfoBox,'10-bit values for the recorded log curves:');
	this.gammaInfoBox.appendChild(logvars);
		var gamires = document.createElement('table');
	var gamiresHead = document.createElement('thead');
	gamiresHead.appendChild(this.addRow(['Reflected %','0','18','38','44','90','720','1350'], 'th'));
	gamires.appendChild(gamiresHead);
	var gamiresBody = document.createElement('tbody');
	gamiresBody.appendChild(this.addRow(['Linear %IRE','0','20','42','49','100','800','1500'],'td'));
	gamiresBody.appendChild(this.addRow(['Rec709 (standard) %IRE','0','43','65','70','100','-','-'],'td'));
	gamiresBody.appendChild(this.addRow(['Rec709(800%) %IRE','3','44','65','70','89','109','-'],'td'));
	gamiresBody.appendChild(this.addRow(['LC709 %IRE','2','40','55','58','72','97','99'],'td'));
	gamiresBody.appendChild(this.addRow(['LC709A %IRE','4','40','55','58','71','97','98'],'td'));
	gamiresBody.appendChild(this.addRow(['HG8009G40 (HG7) %IRE','3','40','58','62','82','109','-'],'td'));
	gamiresBody.appendChild(this.addRow(['HG8009G33 (HG8) %IRE','3','33','49','52','73','109','-'],'td'));
	gamiresBody.appendChild(this.addRow(['S-Log3 %IRE','3.5','41','50','52','61','88','96'],'td'));
	gamiresBody.appendChild(this.addRow(['S-Log2 %IRE','3','32','44','47','59','97','109'],'td'));
	gamiresBody.appendChild(this.addRow(['S-Log %IRE','3','38','50','53','65','104','-'],'td'));
	gamiresBody.appendChild(this.addRow(['LogC (3.x & 4.x) %IRE','4','38','47','49','58','84','92'],'td'));
	gamiresBody.appendChild(this.addRow(['LogC (2.x) %IRE','8','38','47','49','58','83','91'],'td'));
	gamiresBody.appendChild(this.addRow(['Canon C-Log %IRE','7','33','46','48','63','109','-'],'td'));
	gamiresBody.appendChild(this.addRow(['Cineon %IRE','4','46','57','59','69','100','109'],'td'));
	gamires.appendChild(gamiresBody);
	this.gammaInfoBox.appendChild(document.createElement('br'));
	this.addText(this.gammaInfoBox,'%IRE mappings from reflected values:');
	this.gammaInfoBox.appendChild(gamires);
}
LUTInfoBox.prototype.gammaChart = function() {
	this.gammaInName = '';
	this.gammaOutName = '';
	this.chartRefXs = [];
	this.chartRefIns = [];
	this.chartRefOuts = [];
	for (var i=0; i<65; i++) {
		this.chartRefXs[i] = 14*parseFloat(i)/64;
	}
	this.chartStopXs = [];
	this.chartStopIns = [];
	this.chartStopOuts = [];
	for (var i=0; i<65; i++) {
		this.chartStopXs[i] = (parseFloat(i)/4)-8;
	}
	this.chartLutXs = [];
	this.chartLutOuts = [];
	for (var i=0; i<65; i++) {
		this.chartLutXs[i] = parseFloat(i)/64;
	}
	this.gammaChartBox.setAttribute('class','graybox infobox');
	this.chartType = [];
	this.chartType[0] = this.createRadioElement('charttype', false);
	this.gammaChartBox.appendChild(this.chartType[0]);
	this.gammaChartBox.appendChild(document.createElement('label').appendChild(document.createTextNode('Reflected/IRE')));
	this.chartType[1] = this.createRadioElement('charttype', true);
	this.gammaChartBox.appendChild(this.chartType[1]);
	this.gammaChartBox.appendChild(document.createElement('label').appendChild(document.createTextNode('Stop/IRE')));
	this.chartType[2] = this.createRadioElement('charttype', false);
	this.gammaChartBox.appendChild(this.chartType[2]);
	this.gammaChartBox.appendChild(document.createElement('label').appendChild(document.createTextNode('LUT In/LUT Out')));
	this.gammaChartBox.appendChild(document.createElement('br'));
	this.buildChart();
	this.gammaChartBox.appendChild(document.createTextNode('Output gamma including any customisations:'));
	var curires = document.createElement('table');
	var curiresHead = document.createElement('thead');
	curiresHead.appendChild(this.addRow(['Reflected %','0','18','38','44','90','720','1350'], 'th'));
	curires.appendChild(curiresHead);
	var curiresBody = document.createElement('tbody');
	var curvarsRow = this.addRow(['10-bit Values','-','-','-','-','-','-','-'],'td');
	this.lutOutValsChart = curvarsRow.getElementsByTagName('td');
	var curiresRow = this.addRow(['LUTted %IRE','-','-','-','-','-','-','-'],'td');
	this.lutOutIREsChart = curiresRow.getElementsByTagName('td');
	curiresBody.appendChild(curiresRow);
	curiresBody.appendChild(curvarsRow);
	curires.appendChild(curiresBody);
	this.gammaChartBox.appendChild(curires);
}
LUTInfoBox.prototype.buildChart = function() {
	var point = '18';
	var cwidth = 1120;
	var cheight = 600;
	var w = cwidth * 0.98;
	var h = cheight;
	var yMin = h / 15;
	var yMax = yMin*0.5;
	var dY = (h - (1.5*yMin))/1023;
	var yA = dY * 876;
	var yB = dY * 64;
	var y0 = h - yMin - yB;
	var x0 = w / 10;
	var dX = (w - x0)/16;
	// Reflected Against IRE
	var canvas1 = document.createElement('canvas');
	canvas1.id = 'chartcanvas1';
	var ctx1 = canvas1.getContext('2d');
	canvas1.width = cwidth;
	canvas1.height = cheight;
	dX = (w - x0)/14;
	ctx1.fillStyle = 'black';
	ctx1.font = point + 'pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	ctx1.textBaseline = 'middle';
	ctx1.textAlign = 'right';
	ctx1.strokeStyle='black';
	ctx1.beginPath();
	ctx1.lineWidth = 2;
	ctx1.fillText('109.5%', x0 * 0.9,yMax);
	ctx1.fillText('100%', x0 * 0.9,y0 - yA);
	ctx1.fillText('0%', x0 * 0.9,h - yB - yMin);
	ctx1.fillText('-7.3%', x0 * 0.9,h - yMin);
	ctx1.moveTo(x0,y0);
	ctx1.lineTo(w,y0);
	ctx1.moveTo(x0,yMax);
	ctx1.lineTo(x0,h - yMin);
	ctx1.stroke();
	ctx1.beginPath();
	ctx1.strokeStyle='rgba(240, 176, 176, 0.5)';
	ctx1.moveTo(x0,h - yMin);
	ctx1.lineTo(w,h - yMin);
	ctx1.moveTo(x0,y0 - yA);
	ctx1.lineTo(w,y0 - yA);
	ctx1.moveTo(x0,yMax);
	ctx1.lineTo(w,yMax);
	ctx1.stroke();
	ctx1.beginPath();
	ctx1.strokeStyle='rgba(176, 176, 240, 0.5)';
	for (var i=1; i<10; i++){
		ctx1.fillText(parseInt(i*10).toString() + '%', x0 * 0.9,y0 - (yA*i/10));
		ctx1.moveTo(x0,y0 - (yA*i/10));
		ctx1.lineTo(w,y0 - (yA*i/10));
	}
	for (var i=0; i<15; i++){
		ctx1.translate(x0 + (i*dX) + (w/150) + 10,y0 + (1.75*yB) + 10);
		ctx1.rotate(1);
		ctx1.fillText(parseInt(i*100).toString() + '%', 0, 0);
		ctx1.rotate(-1);
		ctx1.translate(-x0 - (i*dX) - (w/150) - 10,-y0 - (1.75*yB) - 10);
		ctx1.moveTo(x0 + (dX*i),yMax);
		ctx1.lineTo(x0 + (dX*i),h - yMin);
	}
	ctx1.stroke();
	var recCanvas1 = document.createElement('canvas');
	recCanvas1.id = 'reccanvas1';
	recCanvas1.width = canvas1.width;
	recCanvas1.height = canvas1.height;
	var outCanvas1 = document.createElement('canvas');
	outCanvas1.id = 'outcanvas1';
	outCanvas1.width = canvas1.width;
	outCanvas1.height = canvas1.height;
	this.refChart = {};
	this.refChart.rec = recCanvas1.getContext('2d');
	this.refChart.out = outCanvas1.getContext('2d');
	this.refChart.width = canvas1.width;
	this.refChart.w = w;
	this.refChart.x0 = x0;
	this.refChart.dX = dX;
	this.refChart.height = canvas1.height;
	this.refChart.h = h;
	this.refChart.y0 = y0;
	this.refChart.yMax = yMax;
	this.refChart.dY = yA;
	this.gammaChartBox.appendChild(canvas1);
	this.gammaChartBox.appendChild(recCanvas1);
	this.gammaChartBox.appendChild(outCanvas1);
	canvas1.style.display = 'none';
	recCanvas1.style.display = 'none';
	outCanvas1.style.display = 'none';
	// Stop Against IRE
	var canvas2 = document.createElement('canvas');
	canvas2.id = 'chartcanvas2';
	var ctx2 = canvas2.getContext('2d');
	canvas2.width = cwidth;
	canvas2.height = cheight;
	dX = (w - x0)/16;
	ctx2.fillStyle = 'black';
	ctx2.font = point + 'pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	ctx2.textBaseline = 'middle';
	ctx2.textAlign = 'right';
	ctx2.strokeStyle='black';
	ctx2.beginPath();
	ctx2.lineWidth = 2;
	ctx2.fillText('109.5%', x0 * 0.9,yMax);
	ctx2.fillText('100%', x0 * 0.9,y0 - yA);
	ctx2.fillText('0%', x0 * 0.9,h - yB - yMin);
	ctx2.fillText('-7.3%', x0 * 0.9,h - yMin);
	ctx2.moveTo(x0,y0);
	ctx2.lineTo(w,y0);
	ctx2.moveTo(x0 + (dX*8),yMax);
	ctx2.lineTo(x0 + (dX*8),h - yMin);
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.strokeStyle='rgba(240, 176, 176, 0.5)';
	ctx2.moveTo(x0,h - yMin);
	ctx2.lineTo(w,h - yMin);
	ctx2.moveTo(x0,y0 - yA);
	ctx2.lineTo(w,y0 - yA);
	ctx2.moveTo(x0,yMax);
	ctx2.lineTo(w,yMax);
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.strokeStyle='rgba(176, 176, 240, 0.5)';
	for (var i=1; i<10; i++){
		ctx2.fillText(parseInt(i*10).toString() + '%', x0 * 0.9,y0 - (yA*i/10));
		ctx2.moveTo(x0,y0 - (yA*i/10));
		ctx2.lineTo(w,y0 - (yA*i/10));
	}
	for (var i=0; i<17; i++){
		ctx2.fillText(parseInt(i-8).toString(), x0 + (i*dX) + (w/150),y0 + (1.75*yB));
		ctx2.moveTo(x0 + (dX*i),yMax);
		ctx2.lineTo(x0 + (dX*i),h - yMin);
	}
	ctx2.stroke();
	var recCanvas2 = document.createElement('canvas');
	recCanvas2.id = 'reccanvas2';
	recCanvas2.width = canvas2.width;
	recCanvas2.height = canvas2.height;
	var outCanvas2 = document.createElement('canvas');
	outCanvas2.id = 'outcanvas2';
	outCanvas2.width = canvas2.width;
	outCanvas2.height = canvas2.height;
	this.stopChart = {};
	this.stopChart.rec = recCanvas2.getContext('2d');
	this.stopChart.out = outCanvas2.getContext('2d');
	this.stopChart.width = canvas2.width;
	this.stopChart.w = w;
	this.stopChart.x0 = x0;
	this.stopChart.dX = dX;
	this.stopChart.height = canvas2.height;
	this.stopChart.h = h;
	this.stopChart.y0 = y0;
	this.stopChart.yMax = yMax;
	this.stopChart.dY = yA;
	this.gammaChartBox.appendChild(canvas2);
	this.gammaChartBox.appendChild(recCanvas2);
	this.gammaChartBox.appendChild(outCanvas2);
	canvas2.style.display = 'block';
	recCanvas2.style.display = 'block';
	outCanvas2.style.display = 'block';
	// LUT In Against LUT Out
	var canvas3 = document.createElement('canvas');
	canvas3.id = 'chartcanvas3';
	var ctx3 = canvas3.getContext('2d');
	canvas3.width = cwidth;
	canvas3.height = cheight;
	dX = (w - x0)*876/1023;
	var xMin = x0 + (64*876/1023);
	ctx3.fillStyle = 'black';
	ctx3.font = point + 'pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	ctx3.textBaseline = 'middle';
	ctx3.textAlign = 'right';
	ctx3.strokeStyle='black';
	ctx3.beginPath();
	ctx3.lineWidth = 2;
	ctx3.fillText('109.5%', x0 * 0.9,yMax);
	ctx3.fillText('100%', x0 * 0.9,y0 - yA);
	ctx3.fillText('0%', x0 * 0.9,h - yB - yMin);
	ctx3.fillText('-7.3%', x0 * 0.9,h - yMin);
	ctx3.fillText('-7.3%', x0+ (w/50),y0 + (1.75*yB));
	ctx3.fillText('0%', xMin + (w/50),y0 + (1.75*yB));
	ctx3.fillText('100%', xMin + dX + (w/50),y0 + (1.75*yB));
	ctx3.fillText('109.5%', w + (w/50),y0 + (1.75*yB));
	ctx3.moveTo(x0,y0);
	ctx3.lineTo(w,y0);
	ctx3.moveTo(xMin,yMax);
	ctx3.lineTo(xMin,h - yMin);
	ctx3.stroke();
	ctx3.beginPath();
	ctx3.strokeStyle='rgba(240, 176, 176, 1)';
	ctx3.moveTo(x0,yMax);
	ctx3.lineTo(x0,h - yMin);
	ctx3.moveTo(w,yMax);
	ctx3.lineTo(w,h - yMin);
	ctx3.moveTo(xMin + dX,yMax);
	ctx3.lineTo(xMin + dX,h - yMin);
	ctx3.moveTo(x0,h - yMin);
	ctx3.lineTo(w,h - yMin);
	ctx3.moveTo(x0,y0 - yA);
	ctx3.lineTo(w,y0 - yA);
	ctx3.moveTo(x0,yMax);
	ctx3.lineTo(w,yMax);
	ctx3.stroke();
	ctx3.beginPath();
	ctx3.strokeStyle='rgba(176, 176, 240, 0.5)';
	for (var i=1; i<10; i++){
		ctx3.fillText(parseInt(i*10).toString() + '%', x0 * 0.9,y0 - (yA*i/10));
		ctx3.moveTo(x0,y0 - (yA*i/10));
		ctx3.lineTo(w,y0 - (yA*i/10));
	}
	for (var i=1; i<10; i++){
		ctx3.fillText(parseInt(i*10).toString()+'%', xMin + (i*dX/10) + (w/50),y0 + (1.75*yB));
		ctx3.moveTo(xMin + (dX*i/10),yMax);
		ctx3.lineTo(xMin + (dX*i/10),h - yMin);
	}
	ctx3.stroke();
	var outCanvas3 = document.createElement('canvas');
	outCanvas3.id = 'outcanvas3';
	outCanvas3.width = canvas3.width;
	outCanvas3.height = canvas3.height;
	this.lutChart = {};
	this.lutChart.out = outCanvas3.getContext('2d');
	this.lutChart.width = canvas3.width;
	this.lutChart.w = w;
	this.lutChart.x0 = x0;
	this.lutChart.dX = dX;
	this.lutChart.height = canvas3.height;
	this.lutChart.h = h;
	this.lutChart.y0 = y0;
	this.lutChart.yMax = yMax;
	this.lutChart.dY = yA;
	this.gammaChartBox.appendChild(canvas3);
	this.gammaChartBox.appendChild(outCanvas3);
	canvas3.style.display = 'none';
	outCanvas3.style.display = 'none';
	// Draw The Lines
//	this.updateGamma();
}
LUTInfoBox.prototype.addText = function(infoBox,text,bold) {
	var para = document.createElement('p');
	if (bold) {
		para.setAttribute('class','bold');
	}
	para.appendChild(document.createTextNode(text));
	infoBox.appendChild(para);
}
LUTInfoBox.prototype.addRow = function(data,section) {
	var max = data.length;
	var row = document.createElement('tr');
	for (var i=0; i < max; i++) {
		var col = document.createElement(section);
		col.appendChild(document.createTextNode(data[i]));
		row.appendChild(col);
	}
	return row;
}
LUTInfoBox.prototype.createRadioElement = function(name, checked) {
    var radioInput;
    try {
        var radioHtml = '<input type="radio" name="' + name + '"';
        if ( checked ) {
            radioHtml += ' checked="checked"';
        }
        radioHtml += '/>';
        radioInput = document.createElement(radioHtml);
    } catch( err ) {
        radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', name);
        if ( checked ) {
            radioInput.setAttribute('checked', 'checked');
        }
    }
    return radioInput;
}
// Event Listeners
LUTInfoBox.prototype.setupEvents = function() {
	this.insMainCam.onclick = function(here){ return function(){ here.showCamInfo(); };}(this);
	this.insCamBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainGam.onclick = function(here){ return function(){ here.showGamInfo(); };}(this);
	this.insGamBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainTwk.onclick = function(here){ return function(){ here.showCustscreen(); };}(this);
	this.insCustBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainLut.onclick = function(here){ return function(){ here.showLutInfo(); };}(this);
	this.insLutBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainPre.onclick = function(here){ return function(){ here.showPreInfo(); };}(this);
	this.insPreBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainGen.onclick = function(here){ return function(){ here.showGenInfo(); };}(this);
	this.insGenBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
	this.insMainInf.onclick = function(here){ return function(){ here.showInfInfo(); };}(this);
	this.insInfBack.onclick = function(here){ return function(){ here.showMainscreen(); };}(this);
}
// Event Responses
LUTInfoBox.prototype.instructionsOpt = function() {
	this.showMainscreen();
	this.instructionsBox.style.display = 'block';
	this.gammaInfoBox.style.display = 'none';
	this.gammaChartBox.style.display = 'none';
}
LUTInfoBox.prototype.gammaInfoOpt = function() {
	this.instructionsBox.style.display = 'none';
	this.gammaInfoBox.style.display = 'block';
	this.gammaChartBox.style.display = 'none';
}
LUTInfoBox.prototype.gammaChartOpt = function() {
	this.instructionsBox.style.display = 'none';
	this.gammaInfoBox.style.display = 'none';
	this.gammaChartBox.style.display = 'block';
}
LUTInfoBox.prototype.updateTables = function() {
	for (var j=0; j<7; j++) {
		if (this.tableIREVals[j] < -0.07305936073059) {
			this.tableIREVals[j] = -0.07305936073059;
		}
		this.lutOutIREs[j+1].innerHTML = Math.round(this.tableIREVals[j]*100).toString();
		this.lutOutVals[j+1].innerHTML = Math.round((this.tableIREVals[j]*876)+64).toString();
		this.lutOutIREsChart[j+1].innerHTML = Math.round(this.tableIREVals[j]*100).toString();
		this.lutOutValsChart[j+1].innerHTML = Math.round((this.tableIREVals[j]*876)+64).toString();
		if (parseInt(this.lutOutVals[j+1].innerHTML) > 1023) {
			this.lutOutVals[j+1].innerHTML = '-';
			this.lutOutIREs[j+1].innerHTML = '-';
			this.lutOutValsChart[j+1].innerHTML = '-';
			this.lutOutIREsChart[j+1].innerHTML = '-';
		}
	}
}
LUTInfoBox.prototype.changeChart = function() {
	if (this.chartType[0].checked) {
		document.getElementById('chartcanvas1').style.display = 'block';
		document.getElementById('reccanvas1').style.display = 'block';
		document.getElementById('outcanvas1').style.display = 'block';
		document.getElementById('chartcanvas2').style.display = 'none';
		document.getElementById('reccanvas2').style.display = 'none';
		document.getElementById('outcanvas2').style.display = 'none';
		document.getElementById('chartcanvas3').style.display = 'none';
		document.getElementById('outcanvas3').style.display = 'none';
	} else if (this.chartType[1].checked) {
		document.getElementById('chartcanvas1').style.display = 'none';
		document.getElementById('reccanvas1').style.display = 'none';
		document.getElementById('outcanvas1').style.display = 'none';
		document.getElementById('chartcanvas2').style.display = 'block';
		document.getElementById('reccanvas2').style.display = 'block';
		document.getElementById('outcanvas2').style.display = 'block';
		document.getElementById('chartcanvas3').style.display = 'none';
		document.getElementById('outcanvas3').style.display = 'none';
	} else{
		document.getElementById('chartcanvas1').style.display = 'none';
		document.getElementById('reccanvas1').style.display = 'none';
		document.getElementById('outcanvas1').style.display = 'none';
		document.getElementById('chartcanvas2').style.display = 'none';
		document.getElementById('reccanvas2').style.display = 'none';
		document.getElementById('outcanvas2').style.display = 'none';
		document.getElementById('chartcanvas3').style.display = 'block';
		document.getElementById('outcanvas3').style.display = 'block';
	}
}
LUTInfoBox.prototype.gotIOGammaNames = function(d) {
	this.gammaInName = d.inName;
	if (typeof d.inG !== 'undefined') {
		this.gammaInName += ' - ' + d.inG;
	}
	this.gammaOutName = d.outName;
	if (typeof d.outG !== 'undefined') {
		this.gammaOutName += ' - ' + d.outG;
	}
	if (d.outName === 'LA' ) {
		this.gammaOutName += ' - ' + this.inputs.laTitle.value;
	}
	this.updateRefChart();
	this.updateStopChart();
	this.updateLutChart();
}
LUTInfoBox.prototype.updateRefChart = function() { // Ref Against IRE
	this.refChart.rec.clearRect(0, 0, this.refChart.width, this.refChart.height);
	this.refChart.out.clearRect(0, 0, this.refChart.width, this.refChart.height);
	this.refChart.rec.font = '28pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	this.refChart.rec.textBaseline = 'middle';
	this.refChart.rec.textAlign = 'left';
	this.refChart.rec.beginPath();
	this.refChart.rec.strokeStyle='rgba(240, 0, 0, 0.75)';	
	this.refChart.rec.fillStyle = 'rgba(240, 0, 0, 0.75)';
	this.refChart.rec.fillText('In: ' + this.gammaInName, 200,365);
	this.refChart.rec.lineWidth = 4;
	this.refChart.rec.moveTo(this.refChart.x0,this.refChart.y0 - (this.chartRefIns[0] * this.stopChart.dY));
	var max = this.chartRefXs.length;
	for (var i=1; i<max; i++) {
		this.refChart.rec.lineTo(this.refChart.x0 + (this.chartRefXs[i] * this.refChart.dX),this.refChart.y0 - (this.chartRefIns[i] * this.refChart.dY));
	}
	this.refChart.rec.stroke();
	this.refChart.out.font = '28pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	this.refChart.out.textBaseline = 'middle';
	this.refChart.out.textAlign = 'left';
	this.refChart.out.beginPath();
	this.refChart.out.strokeStyle='rgba(0, 0, 240, 0.75)';	
	this.refChart.out.fillStyle = 'rgba(0, 0, 240, 0.75)';
	this.refChart.out.fillText('Out: ' + this.gammaOutName, 200,415);
	this.refChart.out.lineWidth = 4;
	this.refChart.out.moveTo(this.refChart.x0,this.refChart.y0 - (this.chartRefOuts[0] * this.stopChart.dY));
	for (var i=1; i<max; i++) {
		this.refChart.out.lineTo(this.refChart.x0 + (this.chartRefXs[i] * this.refChart.dX),this.refChart.y0 - (this.chartRefOuts[i] * this.refChart.dY));
	}
	this.refChart.out.stroke();
	this.refChart.rec.clearRect(0, 0, this.refChart.width, this.refChart.yMax);
	this.refChart.out.clearRect(0, 0, this.refChart.width, this.refChart.yMax);
}
LUTInfoBox.prototype.updateStopChart = function() { // Stop Against IRE
	this.stopChart.rec.clearRect(0, 0, this.stopChart.width, this.stopChart.height);
	this.stopChart.out.clearRect(0, 0, this.stopChart.width, this.stopChart.height);
	this.stopChart.rec.font = '28pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	this.stopChart.rec.textBaseline = 'middle';
	this.stopChart.rec.textAlign = 'left';
	this.stopChart.rec.beginPath();
	this.stopChart.rec.strokeStyle='rgba(240, 0, 0, 0.75)';	
	this.stopChart.rec.fillStyle = 'rgba(240, 0, 0, 0.75)';
	this.stopChart.rec.fillText('In: ' + this.gammaInName, 140,85);
	this.stopChart.rec.lineWidth = 4;
	this.stopChart.rec.moveTo(this.stopChart.x0,this.stopChart.y0 - (this.chartStopIns[0] * this.stopChart.dY));
	var max = this.chartStopXs.length;
	for (var i=1; i<max; i++) {
		this.stopChart.rec.lineTo(this.stopChart.x0 + ((this.chartStopXs[i] + 8) * this.stopChart.dX),this.stopChart.y0 - (this.chartStopIns[i] * this.stopChart.dY));
	}
	this.stopChart.rec.stroke();
	this.stopChart.out.font = '28pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	this.stopChart.out.textBaseline = 'middle';
	this.stopChart.out.textAlign = 'left';
	this.stopChart.out.beginPath();
	this.stopChart.out.strokeStyle='rgba(0, 0, 240, 0.75)';	
	this.stopChart.out.fillStyle = 'rgba(0, 0, 240, 0.75)';
	this.stopChart.out.fillText('Out: ' + this.gammaOutName, 140,135);
	this.stopChart.out.lineWidth = 4;
	this.stopChart.out.moveTo(this.stopChart.x0,this.stopChart.y0 - (this.chartStopOuts[0] * this.stopChart.dY));
	for (var i=1; i<max; i++) {
		this.stopChart.out.lineTo(this.stopChart.x0 + ((this.chartStopXs[i] + 8) * this.stopChart.dX),this.stopChart.y0 - (this.chartStopOuts[i] * this.stopChart.dY));
	}
	this.stopChart.out.stroke();
	this.stopChart.rec.clearRect(0, 0, this.stopChart.width, this.stopChart.yMax);
	this.stopChart.out.clearRect(0, 0, this.stopChart.width, this.stopChart.yMax);
}
LUTInfoBox.prototype.updateLutChart = function() { // Gamma In Against Gamma Out
	var xMin = this.lutChart.x0 + (64*876/1023);
	this.lutChart.out.clearRect(0, 0, this.stopChart.width, this.stopChart.height);
	this.lutChart.out.font = '28pt "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif';
	this.lutChart.out.textBaseline = 'middle';
	this.lutChart.out.textAlign = 'left';
	this.lutChart.out.beginPath();
	this.lutChart.out.strokeStyle='rgba(0, 0, 240, 0.75)';	
	this.lutChart.out.fillStyle = 'rgba(0, 0, 0, 1)';
	this.lutChart.out.fillText(this.gammaInName + ' -> ' + this.gammaOutName, 220,90);
	this.lutChart.out.lineWidth = 4;
	this.lutChart.out.moveTo(this.lutChart.x0,this.lutChart.y0 - (this.chartLutOuts[0] * this.lutChart.dY));
	var max = this.chartLutXs.length;
	for (var i=1; i<max; i++) {
		this.lutChart.out.lineTo( this.lutChart.x0 + ((this.chartLutXs[i]*this.lutChart.dX)*1023/876),this.stopChart.y0 - (this.chartLutOuts[i] * this.lutChart.dY));
	}
	this.lutChart.out.stroke();
	this.lutChart.out.clearRect(0, 0, this.lutChart.width, this.lutChart.yMax);
	var yMin = this.lutChart.h / 15;
	this.lutChart.out.clearRect(0, this.lutChart.h - yMin, this.lutChart.width, this.lutChart.h);
}
LUTInfoBox.prototype.updateGamma = function() {
	this.message.gaTx(this.p,10,null);
	this.message.gaTx(this.p,11,{
		refX: this.chartRefXs,
		stopX: this.chartStopXs,
		lutX: this.chartLutXs,
		tableX: this.tableRefVals
	});
}
LUTInfoBox.prototype.gotChartVals = function(d) {
	this.chartRefIns = d.chartRefIns;
	this.chartRefOuts = d.chartRefOuts;
	this.chartStopIns = d.chartStopIns;
	this.chartStopOuts = d.chartStopOuts;
	this.chartLutOuts = d.chartLutOuts;
	this.tableIREVals = d.tableIREVals;
	this.updateRefChart();
	this.updateStopChart();
	this.updateLutChart();
	this.updateTables();
}
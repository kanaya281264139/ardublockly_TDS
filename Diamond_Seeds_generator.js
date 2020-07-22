/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for DiamondSeeds.
 *
 */

'use strict';
goog.provide('Blockly.Arduino.Diamond_Seeds');
goog.require('Blockly.Arduino');

Blockly.Arduino['ifMovement'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'if (abs(TDSs.GyroX()) + abs(TDSs.GyroY()) + abs(TDSs.GyroZ()) > 5){\n' +      branch + '}\n';
  return code;
};

Blockly.Arduino['ifHigher'] = function(block) {
  var code_define = "";
  code_define += 'float pressure_origin;\n';
  code_define += 'float pressure_dfiltered;\n';
  code_define += 'void DigitalFilteredPressure(void) {\n';
  code_define += '  float df_gain = 0.02;\n';
  code_define += '  pressure_dfiltered = df_gain*TDSs.Pressure() + (1-df_gain)*pressure_dfiltered;\n';
  code_define += '}\n';
  code_define += 'void initPressure(void) {\n';
  code_define += '  pressure_origin    = TDSs.Pressure();\n';
  code_define += '  pressure_dfiltered = pressure_origin;\n';
  code_define += '}\n';
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.definitions_['define_Diamond_Seeds_ifHigher'] = code_define;

  var code_setup = '';
  code_setup += 'initPressure();';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds_ifHigher'] = code_setup;

  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'DigitalFilteredPressure();\n';
  code    += 'if(TDSs.rightButton() || TDSs.leftButton()) initPressure();\n';
  code    += 'if (pressure_origin - pressure_dfiltered > 0.03){\n' +      branch + '}\n';
  return code;
};

Blockly.Arduino['ifHear'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'if (TDSs.SoundPressure() > 20000) {\n' +      branch + '}\n';
  return code;
};

Blockly.Arduino['ifMagnet'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'if (TDSs.Tesla() > 1.0){\n' +      branch + '}\n';
  return code;
};

Blockly.Arduino['ifWarmer'] = function(block) {
  var code_define = "";
  code_define += 'float thermistor_origin;\n';
  code_define += 'float thermistor_dfiltered;\n';
  code_define += 'void DigitalFilteredThermistor(void) {\n';
  code_define += '  float df_gain = 0.01;\n';
  code_define += '  thermistor_dfiltered = df_gain*TDSs.Thermistor() + (1-df_gain)*thermistor_dfiltered;\n';
  code_define += '}\n';
  code_define += 'void initThermistor(void) {\n';
  code_define += '  thermistor_origin    = TDSs.Thermistor();\n';
  code_define += '  thermistor_dfiltered = thermistor_origin;\n';
  code_define += '}\n';
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.definitions_['define_Diamond_Seeds_ifWarmer'] = code_define;

  var code_setup = '';
  code_setup += 'initThermistor();';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds_ifWarmer'] = code_setup;

  var branch = Blockly.Arduino.statementToCode(block, 'DO');
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var code = 'DigitalFilteredThermistor();\n';
  code    += 'if(TDSs.rightButton() || TDSs.leftButton()) initThermistor();\n';
  code    += 'if (thermistor_dfiltered - thermistor_origin > 1.0) {\n' +      branch + '}\n';
  return code;
};


Blockly.Arduino['magneticangle'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.MagneticAngle()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['magneticangleR'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] =
                                                          '#include <TDK_Diamond_Seeds.h>\n';
/*                                                          'class DiamondSeedsSensorGroup{' +
                                                          ' public:' +
                                                          ' void resetSensor();' +
                                                          ' void catch' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          '' +
                                                          ;
                                                          */
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.MagneticAngle(); //Relative';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['magneticangleradian'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.MagneticAngleRadian()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['tesla'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.Tesla()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['accelx'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.AccelX()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['accely'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.AccelY()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['accelz'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.AccelZ()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['gyrox'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.GyroX()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['gyroy'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.GyroY()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['gyroz'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.GyroZ()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['getpressure'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.Pressure()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['gettemperature'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.GetTemperature()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['playwavfile'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds']  = 'TDSs.begin();';
  Blockly.Arduino.setups_['setup_Diamond_Seeds_playwavefile'] = 'TDSs.switchAnalog();'
  var value_wavfile = Blockly.Arduino.valueToCode(block, 'wavfile',Blockly.Arduino.ORDER_ATOMIC);
  value_wavfile = value_wavfile.slice(0,-1);
  value_wavfile = value_wavfile + ".wav"
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.PlayWavFile(' + value_wavfile + '");\n';
  return code;
};

Blockly.Arduino['playtone'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var value_freq = Blockly.Arduino.valueToCode(block, 'freq', Blockly.Arduino.ORDER_ATOMIC);
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
//  var value_wait = Blockly.Arduino.valueToCode(block, 'wait', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
//  var code = 'TDSs.playTone(' + value_freq + ',' + value_time + ',' + value_wait + ');\n';
  var code = 'TDSs.playTone(' + value_freq + ',' + value_time + ',' + '0' + ');\n';
  return code;
};

Blockly.Arduino['thermistor'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.Thermistor();';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['rightbutton'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.rightButton()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['leftbutton'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.leftButton()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['slideswitch'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.slideswitch()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['soundPressure'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  // TODO: Assemble JavaScript into code variable.
  var code = 'TDSs.SoundPressure()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['setpixelcolor'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var value_p = Blockly.Arduino.valueToCode(block, 'p', Blockly.Arduino.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  colour_color = hex2rgb(colour_color);
  var code = 'TDSs.LEDColor(' + value_p + ',' + colour_color[0] + ',' + colour_color[1] + ',' + colour_color[2] + ');\n';
  return code;
};

Blockly.Arduino['setAllpixelcolor'] = function(block) {
  Blockly.Arduino.definitions_['define_Diamond_Seeds'] = '#include <TDK_Diamond_Seeds.h>\n';
  Blockly.Arduino.setups_['setup_Diamond_Seeds'] = 'TDSs.begin();';
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  colour_color = hex2rgb(colour_color);
  var code = '';
  code += 'for(int i=0;i<12;i++){\n'
  code += '    TDSs.LEDColor(i,' + colour_color[0] + ',' + colour_color[1] + ',' + colour_color[2] + ');\n';
  code += '}\n'
  code += 'delay(1000);\n'
  code += 'for(int i=0;i<12;i++){\n'
  code += '    TDSs.LEDColor(i,0,0,0);\n';
  code += '}\n'
  return code;
};

// hexの色コードをrgbに変換する
function hex2rgb ( hex ) {
	if ( hex.slice(0, 1) == "#" ) hex = hex.slice(1) ;
	if ( hex.length == 3 ) hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3) ;
	return [ hex.slice( 0, 2 ), hex.slice( 2, 4 ), hex.slice( 4, 6 ) ].map( function ( str ) {
		return parseInt( str, 16 ) ;
	} ) ;
}

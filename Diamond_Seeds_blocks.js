/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for DiamondSeeds function.
 *     
 */

'use strict';
goog.provide('Blockly.Blocks.Diamond_Seeds');
goog.require('Blockly.Blocks');

var input_colour  = 330;
var output_colour = 230;


Blockly.Blocks['ifMovement'] = {
  init: function() {
    this.jsonInit({
      "message0": "動いたら",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField("");
  }
};

Blockly.Blocks['ifHigher'] = {
  init: function() {
    this.jsonInit({
      "message0": "高くなったら",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField("");
  }
};

Blockly.Blocks['ifHear'] = {
  init: function() {
    this.jsonInit({
      "message0": "音がなったら",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField("");
  }
};

Blockly.Blocks['ifMagnet'] = {
  init: function() {
    this.jsonInit({
      "message0": "磁石に近づいたら",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField("");
  }
};

Blockly.Blocks['ifWarmer'] = {
  init: function() {
    this.jsonInit({
      "message0": "暖かくなったら",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "",
      "helpUrl": ""
    });
    this.appendStatementInput('DO')
        .appendField("");
  }
};



Blockly.Blocks['magneticangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("磁気センサの角度[deg]");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['magneticangleR'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("磁気センサの角度(相対)[deg]");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['magneticangleradian'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("磁気センサの角度[rad]");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tesla'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("磁力のつよさ[T]");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("加速度センサ(X)");
    this.setOutput(true, null);
    this.setColour(input_colour);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['accely'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("加速度センサ(Y)");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelz'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("加速度センサ(Z)");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gyrox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ジャイロセンサ(X)");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gyroy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ジャイロセンサ(Y)");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gyroz'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ジャイロセンサ(Z)");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getpressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("気圧センサ");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gettemperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("気温センサ");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playwavfile'] = {
  init: function() {
    this.appendValueInput("wavfile")
//        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("音楽ファイル");
    this.appendDummyInput()
      .appendField("を再生する")
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(output_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['playtone'] = {
  init: function() {
    this.appendValueInput("freq")
        .setCheck("Number")
        .appendField("音の高さ");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("時間");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(output_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thermistor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("温度センサ");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rightbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("右ボタン");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['leftbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("左ボタン");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['slideswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("スライドスイッチ");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['soundPressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("音の大きさ");
    this.setOutput(true, null);
    this.setColour(input_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setpixelcolor'] = {
  init: function() {
    this.appendValueInput("p")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("LED Num.");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("色を選択")
        .appendField(new Blockly.FieldColour("#3333ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(output_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setAllpixelcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DiamondSeedsを光らせる");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("色をえらぶ")
        .appendField(new Blockly.FieldColour("#3333ff"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(output_colour);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

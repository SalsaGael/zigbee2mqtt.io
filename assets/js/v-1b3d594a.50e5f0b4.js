"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40803],{479445:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-1b3d594a","path":"/devices/MTG035-ZB-RL.html","title":"Tuya MTG035-ZB-RL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya MTG035-ZB-RL control via MQTT","description":"Integrate your Tuya MTG035-ZB-RL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-05-09T20:14:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Detection range (numeric)","slug":"detection-range-numeric","link":"#detection-range-numeric","children":[]},{"level":3,"title":"Shield range (numeric)","slug":"shield-range-numeric","link":"#shield-range-numeric","children":[]},{"level":3,"title":"Entry sensitivity (numeric)","slug":"entry-sensitivity-numeric","link":"#entry-sensitivity-numeric","children":[]},{"level":3,"title":"Entry distance indentation (numeric)","slug":"entry-distance-indentation-numeric","link":"#entry-distance-indentation-numeric","children":[]},{"level":3,"title":"Entry filter time (numeric)","slug":"entry-filter-time-numeric","link":"#entry-filter-time-numeric","children":[]},{"level":3,"title":"Departure delay (numeric)","slug":"departure-delay-numeric","link":"#departure-delay-numeric","children":[]},{"level":3,"title":"Block time (numeric)","slug":"block-time-numeric","link":"#block-time-numeric","children":[]},{"level":3,"title":"Breaker status (binary)","slug":"breaker-status-binary","link":"#breaker-status-binary","children":[]},{"level":3,"title":"Breaker mode (enum)","slug":"breaker-mode-enum","link":"#breaker-mode-enum","children":[]},{"level":3,"title":"Illuminance threshold (numeric)","slug":"illuminance-threshold-numeric","link":"#illuminance-threshold-numeric","children":[]},{"level":3,"title":"Status indication (enum)","slug":"status-indication-enum","link":"#status-indication-enum","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721673126000},"filePathRelative":"devices/MTG035-ZB-RL.md"}')},644834:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(166252);const n=(0,a._)("h1",{id:"tuya-mtg035-zb-rl",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-mtg035-zb-rl","aria-hidden":"true"},"#"),(0,a.Uk)(" Tuya MTG035-ZB-RL")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"MTG035-ZB-RL")],-1),c=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Human presence sensor with relay")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"presence, illuminance_lux, target_distance, radar_sensitivity, detection_range, shield_range, entry_sensitivity, entry_distance_indentation, entry_filter_time, departure_delay, block_time, breaker_status, breaker_mode, illuminance_threshold, status_indication, sensor, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MTG035-ZB-RL.png",alt:"Tuya MTG035-ZB-RL"})])],-1),u=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric" aria-hidden="true">#</a> Target distance (numeric)</h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar sensitivity (numeric)</h3><p>Detection threshold for the strength of object energy. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric" aria-hidden="true">#</a> Detection range (numeric)</h3><p>Maximum distance detected by the sensor. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="shield-range-numeric" tabindex="-1"><a class="header-anchor" href="#shield-range-numeric" aria-hidden="true">#</a> Shield range (numeric)</h3><p>Nearest distance detected by the sensor. Value can be found in the published state on the <code>shield_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shield_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#entry-sensitivity-numeric" aria-hidden="true">#</a> Entry sensitivity (numeric)</h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range. Value can be found in the published state on the <code>entry_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="entry-distance-indentation-numeric" tabindex="-1"><a class="header-anchor" href="#entry-distance-indentation-numeric" aria-hidden="true">#</a> Entry distance indentation (numeric)</h3><p>Indent the distance inward based on the dectection distance. Value can be found in the published state on the <code>entry_distance_indentation</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_distance_indentation&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-filter-time-numeric" tabindex="-1"><a class="header-anchor" href="#entry-filter-time-numeric" aria-hidden="true">#</a> Entry filter time (numeric)</h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range . Value can be found in the published state on the <code>entry_filter_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_filter_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="departure-delay-numeric" tabindex="-1"><a class="header-anchor" href="#departure-delay-numeric" aria-hidden="true">#</a> Departure delay (numeric)</h3><p>Confirmation time after the target disappears. Value can be found in the published state on the <code>departure_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;departure_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="block-time-numeric" tabindex="-1"><a class="header-anchor" href="#block-time-numeric" aria-hidden="true">#</a> Block time (numeric)</h3><p>Time for the target to be detected again after switching from manned(occupy) to unmanned(unoccupy) mode. Value can be found in the published state on the <code>block_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;block_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="breaker-status-binary" tabindex="-1"><a class="header-anchor" href="#breaker-status-binary" aria-hidden="true">#</a> Breaker status (binary)</h3><p>Remotely control the breaker in standard mode. Value can be found in the published state on the <code>breaker_status</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breaker_status&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> breaker status is ON, if <code>OFF</code> OFF.</p><h3 id="breaker-mode-enum" tabindex="-1"><a class="header-anchor" href="#breaker-mode-enum" aria-hidden="true">#</a> Breaker mode (enum)</h3><p>Breaker mode: standard is remotely controlled, local is automatic. Value can be found in the published state on the <code>breaker_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breaker_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>local</code>.</p><h3 id="illuminance-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-threshold-numeric" aria-hidden="true">#</a> Illuminance threshold (numeric)</h3><p>Illumination threshold for local (automatic) switching mode operation. Value can be found in the published state on the <code>illuminance_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>420</code>. The unit of this value is <code>lx</code>.</p><h3 id="status-indication-enum" tabindex="-1"><a class="header-anchor" href="#status-indication-enum" aria-hidden="true">#</a> Status indication (enum)</h3><p>Indicator light will flash when human presence is detected. Value can be found in the published state on the <code>status_indication</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_indication&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>The radar sensor can be set in four states: on, off, occupied and unoccupied. For example, if set to occupied, it will continue to maintain presence regardless of whether someone is present or not. If set to unoccupied, the unoccupied state will be maintained permanently.. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>occupied</code>, <code>unoccupied</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',36),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[d,(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.w5)((()=>[(0,a.Uk)("Tuya")])),_:1})])]),r,s,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);
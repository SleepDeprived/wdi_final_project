function showHideTimer(){console.log("switch toggled"),$(this).is(":checked")?$("#timer-elements").show():$("#timer-elements").hide()}function timer(){function t(){if(0>=i){{window.webkitNotifications.createNotification("rails.png","Time to Commit","I pity the fool who doesn't commit").show()}return clearInterval(n),$("#countdown-timer").html(""),void 0}var t=Math.floor(i/60),o=i-60*t;$("#countdown-timer").html(t+" min "+o+" sec"),i-=1}if(0!==window.webkitNotifications.checkPermission())window.webkitNotifications.requestPermission();else{console.log("button detects click");var o=$("#time").val(),i=60*o,n=setInterval(t,1e3)}}$(document).ajaxSend(function(t,o){var i=$("meta[name='csrf-token']").attr("content");o.setRequestHeader("X-CSRF-Token",i)}),window.Dashboard={Models:{},Collections:{},Views:{}},Dashboard.Router=Backbone.Router.extend({routes:{"":"dashboard"},initialize:function(){Backbone.history.start()},dashboard:function(){console.log("dashboard");var t=new Dashboard.Collections.Summaries;Dashboard.dash=new Dashboard.Views.SummariesView({collection:t})}}),Dashboard.Models.Summary=Backbone.Model.extend({urlRoot:"/github"}),Dashboard.Collections.Summaries=Backbone.Collection.extend({url:"/github",model:Dashboard.Models.Summary,initialize:function(){this.fetch({success:function(t){console.log(t)}})}}),Dashboard.Views.SummariesView=Backbone.View.extend({el:"#chart",events:{},initialize:function(){this.listenTo(this.collection,"sync add",this.render)},render:function(){var t=this.collection.toJSON();$(function(){$("#chart").highcharts({chart:{type:"column"},title:{text:"Daily GitHub Commits"},yAxis:{title:{text:"Number of Commits"},gridLineWidth:0,minorGridLineWidth:0},series:[{name:"Days over the past year",data:t[0].commits}]})})}}),Dashboard.beginSitting=function(){Dashboard.settings={},$("#start-sitting-button").hide(),$("#end-sitting-button").show(),Dashboard.settings.location_id=$("#current-sitting-location").data().id,"1"===$("#timer_toggle").val()?(Dashboard.settings.commit_clock_on=!0,Dashboard.settings.commit_clock_duration=$("#time").val()):(Dashboard.settings.commit_clock_on=!1,Dashboard.settings.commit_clock_duration=null),Dashboard.createSitting(Dashboard.settings)},Dashboard.createSitting=function(t){$.ajax({dataType:"json",type:"POST",url:"/sittings",data:t}).done(function(t){console.log(t)})},Dashboard.endSitting=function(){$("#start-sitting-button").show(),$("#end-sitting-button").hide()},Dashboard.getLocation=function(){Dashboard.current_location=navigator.geolocation.getCurrentPosition(Dashboard.showPosition)},Dashboard.showPosition=function(t){Dashboard.loc={},Dashboard.loc.latitude=t.coords.latitude,Dashboard.loc.longitude=t.coords.longitude,Dashboard.position_string="latitude="+Dashboard.loc.latitude+"&longitude="+Dashboard.loc.longitude,Dashboard.findLocation(Dashboard.position_string),Dashboard.loc.latitude=Math.round(1e7*t.coords.latitude)/1e7,Dashboard.loc.longitude=Math.round(1e7*t.coords.longitude)/1e7,Dashboard.findLocation(Dashboard.loc)},Dashboard.findLocation=function(t){$.ajax({dataType:"json",type:"GET",url:"/location_by_coords?"+t}).done(function(t){null===t?window.webkitNotifications.createNotification("rails.png","We can't find your location","Please add your location.").show():(console.log(t),$("#current-sitting-location").html("Current Location: </br>"+t.name).data("id",t.id))})},$(document).ready(function(){Dashboard.router=new Dashboard.Router,$("#timer_toggle").on("click",showHideTimer),$("#start_timer_button").on("click",timer),$("#start-sitting-button").on("click",Dashboard.beginSitting),$("#end-sitting-button").on("click",Dashboard.endSitting),Dashboard.getLocation()});
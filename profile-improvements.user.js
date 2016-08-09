// ==UserScript==
// @name         Profile Improvements
// @include      *www.erevollution.com/*/profile/*
// @version      0.1.5
// @description  Profile Improvements
// @author       Anonymous
// @grant        none
// ==/UserScript==

function style(a){$("head").append("<style>"+a+"</style>")}!function(){"use strict";style("select {display:inline-block!important; width:auto!important;padding:1px!important;}"),style(".hits {line-height:44px;font-weight: bold;}"),style(".hit-class{color: #595959;}"),style(".small-number {width:70px;display:inline;}");var a=navigator.language||navigator.userLanguage||"en-US";$(document).ready(function(){function D(){n=Math.ceil((d+5*e)*(1+.05*h)*j*i*l),n-=n*k;var a=A-z;r=Math.ceil(a/n);var b=C-B;s=Math.ceil(b/n),t=10*Math.ceil((y[1]-y[0])/n),n*=m,E()}function E(){$("span#oneHit").html(n.toLocaleString(a,{minimumFractionDigits:2})),$("strong#tp_in").html(v+"in "+r+" hits"),$("strong#ally_in").html(v+"in "+s+" hits");var b=Math.round(t/1e3);b=b>1?b+"k":t,$("span#mr_in").html(v+"in "+b+" hits")}function F(a){var b=a.html().split("/");return z=parseFloat(b[0].split(",").join("")),A=parseFloat(b[1].split(",").join("")),[z,A]}var b=$("span.vs164-2"),c=$("div.vs163-1"),d=parseFloat(b.html().replace(",","")),e=parseInt($("span.vs164-13").html()),f=/[\d]+/g,g=$("img.vs164-5").attr("src"),h=f.exec(g)[0],i=$("input#ne:checked").length?1.1:1,j=parseFloat($("select#weapon").val())||1,k=parseFloat($("select#dsystem").val())||0,l=parseFloat($("select#booster").val())||1,m=parseInt($("input#number-of-hits"))||5,n=0,o=$("small.vs165-5 strong").eq(0),p=$("small.vs165-5 strong").eq(1),q=$("span.vs164-10").eq(0),r=0,s=0,t=0,u=0,v="&nbsp";o.after('<strong id="tp_in" class="hits"></strong>'),p.after('<strong id="ally_in" class="hits"></strong>'),q.after('<span class="vs164-10" id="mr_in" class="hits"></span>');var w=F(o),x=F(p),y=F(q),z=w[0],A=w[1],B=x[0],C=x[1];D(),$("div.vs164-11").after('<h3 style="margin-top: 15px;clear: both;"><span>Calculator</span></h3><br /><div class="vs165 hits"><div id="oneHit" class="vs165-1"> NE: <input type="checkbox" id="ne" value="1.1"/> <select required="required" class="form-control" id="weapon"><option value="1.0">No weapon</option><option value="1.2">Q1 Weapon</option><option value="1.4">Q2 Weapon</option><option value="1.6">Q3 Weapon</option><option value="1.8">Q4 Weapon</option><option value="2.0">Q5 Weapon</option><option value="1.4">Q1 Tank</option><option value="1.8">Q2 Tank</option><option value="2.2">Q3 Tank</option><option value="2.6">Q4 Tank</option><option value="3.0">Q5 Tank</option><option value="2.0">Q1 Helicopter</option><option value="2.5">Q2 Helicopter</option><option value="3.0">Q3 Helicopter</option><option value="3.5">Q4 Helicopter</option><option value="4.0">Q5 Helicopter</option><option value="5.0">RPG</option></select> <select required="required" class="form-control" id="dsystem"><option value="0.0">No Defense</option><option value="0.05">Q1 Defense</option><option value="0.10">Q2 Defense</option><option value="0.15">Q3 Defense</option><option value="0.20">Q4 Defense</option><option value="0.25">Q5 Defense</option></select> <select required="required" class="form-control" id="booster"><option value="1.0">No booster</option><option value="1.1">Q1 Booster</option><option value="1.3">Q3 Booster</option><option value="1.5">Q5 Booster</option></select></div> <div class="vs165-3"><span id="oneHit" class="hit-class">'+n.toLocaleString(a,{minimumFractionDigits:2})+'</span> / <input type="text" class="form-control small-number" name="number-of-hits" id="number-of-hits" value="'+m+'"/> hit(s)</div></div>'),$("input#ne").click(function(){i=this.checked?1.1:1,D()}),$("select#weapon").change(function(){j=parseFloat($(this).val()),D()}),$("select#dsystem").change(function(){k=parseFloat($(this).val()),D()}),$("select#booster").change(function(){l=parseFloat($(this).val()),D()}),$("input#number-of-hits").on("keyup",function(){m=parseInt($(this).val())||1,D()}),c.each(function(){var a=parseInt($(this).html());u+=a}),c.eq(0).parent().prev().prev().html("<span>"+c.eq(0).parent().prev().prev().html()+" ("+u+")</span>")})}();

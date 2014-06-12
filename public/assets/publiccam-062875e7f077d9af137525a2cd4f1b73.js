(function(){var e,a,t,r,s,n,i,c,o,u,l,d,p,h;p=function(e){return Notification.show(e),!0},h=function(e){return Notification.show(e),!0},d=function(e){var a,t;return t=$('meta[name="csrf-token"]'),t.size()>0&&(a={"X-CSRF-Token":t.attr("content")},e.headers=a),jQuery.ajax(e),!0},e=function(e){var a,t,r,u,l,d,p,h;return l=$("<tr>"),"share_request"===e.type?l.attr("share-request-id",e.share_id):l.attr("share-id",e.share_id),t=$("<td>",{"class":"col-lg-4"}),t.append($("<span>",{"class":"glyphicon glyphicon-user"})),t.append(document.createTextNode(" "+e.email)),"share_request"===e.type&&(h=$("<small>",{"class":"blue"}),h.text(" ...pending"),t.append(h)),l.append(t),t=$("<td>",{"class":"col-lg-2"}),r=$("<div>",{"class":"input-group input-group-sm"}),d=$("<select>",{"class":"form-control reveal","show-class":"show-save"}),d.focus(i),u=$("<option>",{value:"minimal"}),"full"!==e.permissions&&u.attr("selected","selected"),u.text("Read Only"),d.append(u),u=$("<option>",{value:"full"}),"full"===e.permissions&&u.attr("selected","selected"),u.text("Full Rights"),d.append(u),r.append(d),t.append(r),l.append(t),t=$("<td>",{"class":"col-lg-2"}),a=$("<button>",{"class":"save show-save btn btn-primary bt-sm"}),a.text("Save"),a.click("share"===e.type?c:o),t.append(a),l.append(t),t=$("<td>",{"class":"col-lg-2"}),r=$("<div>",{"class":"form-group"}),p=$("<span>"),p.append($("<span>",{"class":"glyphicon glyphicon-remove"})),"share"===e.type?(p.addClass("delete-share-control"),p.append($(document.createTextNode(" Remove User"))),p.click(s),p.attr("share_id",e.share_id)):(p.addClass("delete-share-request-control"),p.append($(document.createTextNode(" Revoke Request"))),p.click(n),p.attr("email",e.email)),p.attr("camera_id",e.camera_id),r.append(p),t.append(r),l.append(t),l.hide(),$("#sharing_list_table tbody").append(l),l.fadeIn(),!0},u=function(e){var a,t,r,s,n,i,c;switch(e.preventDefault(),i=$("input[name=sharingOptionRadios]:checked").val(),a=$("#set_permissions_submit"),t=$("#sharing_tab_camera_id").val(),r={},i){case"public_discoverable":r["public"]=!0,r.discoverable=!0,$(".show-on-public").show(),$(".show-on-private").hide();break;case"public_undiscoverable":r["public"]=!0,r.discoverable=!1,$(".show-on-public").show(),$(".show-on-private").hide();break;default:r["public"]=!1,r.discoverable=!1,$(".show-on-public").hide(),$(".show-on-private").show()}return s=function(){return p("Update of camera permissions failed. Please contact support."),a.removeAttr("disabled"),!1},n=function(e){return e.success?h("Camera permissions successfully updated."):p("Update of camera permissions failed. Please contact support."),a.removeAttr("disabled"),!0},c={cache:!1,data:r,dataType:"json",error:s,success:n,type:"POST",url:"/share/camera/"+t},a.attr("disabled","disabled"),d(c),!0},s=function(e){var a,t,r,s,n,i;return e.preventDefault(),a=$(e.currentTarget),n=a.parent().parent().parent(),t={camera_id:a.attr("camera_id"),share_id:a.attr("share_id")},r=function(){return p("Delete of camera shared failed. Please contact support."),!1},s=function(e){var a;return e.success?(a=function(){return n.remove()},n.fadeOut("slow",a)):p("Delete of camera shared failed. Please contact support."),!0},i={cache:!1,data:t,dataType:"json",error:r,success:s,type:"DELETE",url:"/share"},d(i),!0},n=function(e){var a,t,r,s,n,i;return e.preventDefault(),a=$(e.currentTarget),n=a.parent().parent().parent(),t={camera_id:a.attr("camera_id"),email:a.attr("email")},r=function(){return p("Delete of share request failed. Please contact support."),!1},s=function(e){var a;return e.success?(a=function(){return n.remove()},n.fadeOut("slow",a)):p("Delete of share request failed. Please contact support."),!0},i={cache:!1,data:t,dataType:"json",error:r,success:s,type:"DELETE",url:"/share/request"},d(i),!0},r=function(t){var r,s,n,i;return t.preventDefault(),r=$("#sharingUserEmail").val(),i="Full Rights"!==$("#sharingPermissionLevel").val()?"minimal":"full",s=function(){return p("Add camera shared failed."),!1},n=function(a){return a.success?("share"===a.type?(e(a),h("Camera successfully shared with User")):("share_request"===a.type,e(a),h("A notification email has been dispatched to the specified email address.")),$("#sharingUserEmail").val("")):p("Adding a User failed."),!0},a($("#sharing_tab_camera_id").val(),r,i,n,s),!0},c=function(e){var a,t,r,s,n,i,c;return e.preventDefault(),a=$(this),i=a.parent().parent(),t=i.find("select"),r={permissions:t.val()},s=function(){return p("Update of share failed. Please contact support."),!1},n=function(e){return e.success?(h("Share successfully updated."),a.fadeOut()):p("Update of share failed. Please contact support."),!0},c={cache:!1,data:r,dataType:"json",error:s,success:n,type:"PATCH",url:"/share/"+i.attr("share-id")},d(c),!0},o=function(e){var a,t,r,s,n,i,c;return e.preventDefault(),a=$(this),i=a.parent().parent(),t=i.find("select"),r={permissions:t.val()},s=function(){return p("Update of share request failed. Please contact support."),!1},n=function(e){return e.success?(h("Share request successfully updated."),a.fadeOut()):p("Update of share request failed. Please contact support."),!0},c={cache:!1,data:r,dataType:"json",error:s,success:n,type:"PATCH",url:"/share/request/"+i.attr("share-request-id")},d(c),!0},a=function(e,a,t,r,s){var n,i;return n={camera_id:e,email:a,permissions:t},i={cache:!1,data:n,dataType:"json",error:s,success:r,type:"POST",url:"/share"},d(i),!0},i=function(){return $(this).parent().parent().parent().find("td:eq(2) button").fadeIn(),!0},l=function(){var e;return e=$(this).val(),$("div.desc").hide(),$("#Shares"+e).show(),!0},t=function(){return $("#set_permissions_submit").click(u),$(".delete-share-control").click(s),$(".delete-share-request-control").click(n),$("#submit_share_button").click(r),$(".update-share-button").click(c),$(".update-share-request-button").click(o),$(".save").hide(),$(".reveal").focus(i),$("input[name$='sharingOptionRadios']").click(l),Notification.init(".bb-alert"),!0},window.Evercam||(window.Evercam={}),window.Evercam.Share={initializeTab:t,createShare:a}}).call(this),function(){var e,a,t,r,s,n;s=function(e){return Notification.show(e),!0},n=function(e){return Notification.show(e),!0},a=function(e){var a,t,r,i,c,o;return e.preventDefault(),r=$(e.target),t=r.attr("email"),a=r.attr("camera_id"),o="minimal",i=function(){return s("Add camera to my shared cameras failed."),!1},c=function(e){return e.success?n("Successfully added to your shared cameras."):s("Failed to add camera to your shared cameras."),!0},window.Evercam.Share.createShare(a,t,o,c,i),!0},r=function(){return $.removeCookie("public-style"),$.cookie("public-style","list",{expires:365})},t=function(){return $.removeCookie("public-style"),$.cookie("public-style","grid",{expires:365})},e=function(){return $(".create-share-button").click(a),$("#grid-style").click(t),$("#list-style").click(r),Notification.init(".bb-alert"),$("img").error(function(){return $(this).attr("src","https://www.evercam.io/img/publiccams-error.png")}),!0},window.Evercam||(window.Evercam={}),window.Evercam.Publiccam={initialize:e}}.call(this);
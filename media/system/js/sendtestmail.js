var sendTestMail=function(){$=jQuery;var e={smtpauth:$('input[name="jform[smtpauth]"]:checked').val(),smtpuser:$('input[name="jform[smtpuser]"]').val(),smtphost:$('input[name="jform[smtphost]"]').val(),smtpsecure:$('select[name="jform[smtpsecure]"]').val(),smtpport:$('input[name="jform[smtpport]"]').val(),mailfrom:$('input[name="jform[mailfrom]"]').val(),fromname:$('input[name="jform[fromname]"]').val(),mailer:$('select[name="jform[mailer]"]').val(),mailonline:$('input[name="jform[mailonline]"]:checked').val()},a=$('input[name="jform[smtppass]"]');!1===a.is(":disabled")&&(e.smtppass=a.val()),Joomla.removeMessages(),$.ajax({method:"POST",url:document.getElementById("sendtestmail").getAttribute("data-ajaxuri"),data:e,dataType:"json"}).fail(function(e,a,s){Joomla.renderMessages(Joomla.ajaxErrorsMessages(e,a,s)),window.scrollTo(0,0)}).done(function(e){"object"==typeof e.messages&&null!==e.messages&&(Joomla.renderMessages(e.messages),window.scrollTo(0,0))})};jQuery(document).ready(function(e){e("#sendtestmail").click(sendTestMail)});

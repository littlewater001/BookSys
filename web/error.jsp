<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<html>
<head>
    <title>登录失败</title>
    <meta http-equiv="refresh" content="10; url=login.jsp">
</head>
<body>
<div>对不起,
    <%=(String) session.getAttribute("username")%>
</div>
请您确认用户名和密码!
</body>
</html>
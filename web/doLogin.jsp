<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<% request.setCharacterEncoding("UTF-8");
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    session.setAttribute("username", username);
    if (username.equals("蜡笔小新") && password.equals("hello123")) {
        session.setAttribute("isLogin", "true");
        response.sendRedirect("success.jsp");
    } else {
        session.setAttribute("isLogin", "false");
        response.sendRedirect("error.jsp");
    }
%>
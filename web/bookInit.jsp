<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page import="java.util.*, pojo.Book " %>
<% HashMap<String,Book> books=new HashMap<>();
    String[] bookNos={"1001","1002","1003","1004"};
    String[] bookCovers={"book01.jpg","book02.jpg","book03.jpg","book04.jpg"};
    String[] bookNames={"123","456","JSP & Servlet学习笔记","零基础学设计从自学入门到职场进阶"};
    float[] nowPrices={10,20,30,40};
    float[] orgPrices={20,30,40,50};
    int[] comments={30,40,50,60};
    String[] authors={"1","2","3","4"};
    String[] pressDates={"2012","2013","2014","2015"};
    String[] presses={"11","22","33","44"};
    int[] bookNums={5,5,5,5};
    for(int i=0;i<4;i++){
        Book book=new Book();
        book.setBookNo(bookNos[i]);
        book.setBookCover(bookCovers[i]);
        book.setBookName(bookNames[i]);
        book.setNowPrice(nowPrices[i]);
        book.setOrgPrice(orgPrices[i]);
        book.setComments(comments[i]);
        book.setAuthor(authors[i]);
        book.setPressDate(pressDates[i]);
        book.setPress(presses[i]);
        book.setBookNum(bookNums[i]);
        books.put(bookNos[i],book);
    }
    session.setAttribute("books",books);
    response.sendRedirect("bookList.jsp");
    %>
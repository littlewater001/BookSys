# BookSys

一个基于 Java、JSP 和 Maven 的图书商城示例项目，包含图书展示、用户登录/注册以及购物车相关页面。

## 功能

- 图书首页与图书列表展示
- 用户登录与注册页面
- 购物车展示、添加和删除相关页面
- 基于 JavaBean 的图书实体模型

## 技术栈

- Java 11
- JSP / HTML / CSS / JavaScript
- Maven
- Servlet API

## 项目结构

```text
BookSys/
├─ src/main/java/pojo/Book.java  # 图书实体
├─ web/                           # JSP、HTML、CSS、JavaScript 和图片资源
├─ lib/                           # 本地依赖
├─ pom.xml
└─ README.md
```

## 环境要求

- JDK 11 或更高版本
- Maven 3.8+
- 支持 JSP 的 Servlet 容器，例如 Tomcat 9+

## 运行

1. 使用 IntelliJ IDEA 导入项目，并选择 JDK 11。
2. 配置支持 JSP 的 Tomcat 运行配置，将 Web 资源目录配置为 `web`。
3. 启动 Tomcat 后访问：

   ```text
   http://localhost:8080/BookSys/
   ```

也可以先使用 Maven 验证项目配置：

```bash
mvn clean package
```

## 说明

当前项目主要提供前端页面和基础 JavaBean 示例，数据库、持久化层以及完整的后端业务接口需要根据实际部署需求继续补充。


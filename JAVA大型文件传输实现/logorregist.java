package wangluoshiyan;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class logorregist {
public Boolean regist(String x,String y) {

    Connection con;
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/hibernate";
    String user = "root";
    String password = "724877192";
   
    
    try {
        Class.forName(driver);
        con = DriverManager.getConnection(url,user,password);
        if(!con.isClosed())
            System.out.println("Succeeded connecting to the Database!");
        Statement statement = con.createStatement();
        String sql = "select * from user";
        ResultSet rs = statement.executeQuery(sql);
        

        PreparedStatement psql;
        ResultSet res;
        psql = con.prepareStatement("insert into user (username,password) "
                + "values(?,?)");
        psql.setString(1, x);     
        psql.setString(2, y);
       
        psql.executeUpdate();           //执行更新
        return true;
    } catch(ClassNotFoundException e) {   
       
        System.out.println("找不到驱动!");   
        e.printStackTrace();   
        } catch(SQLException e) {
      
        e.printStackTrace();  
        }catch (Exception e) {
        // TODO: handle exception
        e.printStackTrace();
    }finally{
        System.out.println("数据库数据成功获取！！");
    }
	return false;
}
public Boolean login(String x,String y) {
	

    Connection con;

    String driver = "com.mysql.jdbc.Driver";

    String url = "jdbc:mysql://localhost:3306/hibernate";

    String user = "root";
  
    String password = "724877192";
    try {
       
        Class.forName(driver);
      
        con = DriverManager.getConnection(url,user,password);
        if(!con.isClosed())
            System.out.println("Succeeded connecting to the Database!");
      
        Statement statement = con.createStatement();
    
        String sql = "select * from user";
     
        ResultSet rs = statement.executeQuery(sql);
        while(rs.next()){
        	if(x.equals(rs.getString("username"))&&y.equals(rs.getString("password"))){
        		System.out.println("找到这对组合");
        		rs.close();
        		con.close();
        		return true;

        	}
        	
 
        }
        
        rs.close();
        con.close();
     
    } catch(ClassNotFoundException e) {   
    
        System.out.println("找不到驱动");   
        e.printStackTrace();   
        } catch(SQLException e) {
        
        e.printStackTrace();  
        }catch (Exception e) {
        e.printStackTrace();
    }finally{
        System.out.println("数据库数据成功获取！！");
    }
	return false;
}
    

    public static void main(String[] args) {
       logorregist a=new logorregist();
       a.login("总裁","王刚");
    }
    
}
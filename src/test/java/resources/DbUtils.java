package resources;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author pavankumar s
 */
public class DbUtils {
    
    private static final Logger logger = LoggerFactory.getLogger(DbUtils.class); 
    
    private final JdbcTemplate jdbc;

    public DbUtils(Map<String, Object> config) {
        String url = (String) config.get("url");
      
        String username = (String) config.get("username");
        String password = (String) config.get("password");
        System.out.println(""+username+"--"+"passowrd--"+password);
        String driver = (String) config.get("driverClassName");
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        jdbc = new JdbcTemplate(dataSource);
        logger.info("init jdbc template: {}", url);
        System.out.println("testing jdbc connection : \n" +jdbc + "\n");
    }
    
    public Object readValue(String query) {
    	System.out.println("testing jdbc connection :" +jdbc);
    	 return jdbc.queryForObject(query, Object.class);
    }    
    
    public Map<String, Object> readRow(String query) {
    	System.out.println("testing jdbc connection :" +jdbc);
        return jdbc.queryForMap(query);
    }
    
    public List<Map<String, Object>> readRows(String query) {
    	return jdbc.queryForList(query);
    }   
    
   
    
}
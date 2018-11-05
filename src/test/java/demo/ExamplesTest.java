package demo;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.intuit.karate.junit4.Karate;

import cucumber.api.CucumberOptions;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

@CucumberOptions(tags = {"~@ignore"},plugin = { "pretty", "html:test-results/cucumberreports/html/", "json:target/json/" },
monochrome=true)
@RunWith(Karate.class)
public class ExamplesTest {
	
	 @BeforeClass
	    public static void beforeClass() throws Exception {
	    	
	    } 
	    
	    @Test
	    public void testParallel() {
	        String karateOutputPath = "target/surefire-reports";
	        generateReport(karateOutputPath);
	      
	    } 
	    
	    private static void generateReport(String karateOutputPath) {
	        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] {"json"}, true);
	        List<String> jsonPaths = new ArrayList(jsonFiles.size());
	        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
	        Configuration config = new Configuration(new File("target"), "demo");
	        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
	        reportBuilder.generateReports();        
	    }
	
}
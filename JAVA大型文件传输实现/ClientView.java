package wangluoshiyan;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JToggleButton;

import org.jb2011.lnf.beautyeye.*;
import org.jb2011.lnf.beautyeye.ch3_button.BEButtonUI;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionListener;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.awt.event.ActionEvent;
import javax.swing.JPasswordField;
import javax.swing.JProgressBar;
import java.awt.Font;

public class ClientView {

	public  JFrame frmBkmr;
	public JTextField textField;
	public JTextField textField_1;
	public JLabel Label = new JLabel("");
	

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		
		
		    try
		    {
		        org.jb2011.lnf.beautyeye.BeautyEyeLNFHelper.launchBeautyEyeLNF();
		    }
		    catch(Exception e)
		    {
		        //TODO exception
		    }
		
		LogView k=new LogView();
		k.frame1.setVisible(true);
		
		  
	//	ClientView window = new ClientView();
	//	window.frame.setVisible(true);
					

		
	}

	/**
	 * Create the application.
	 * @wbp.parser.entryPoint
	 */
	public ClientView() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
	
		frmBkmr = new JFrame();
		frmBkmr.setTitle("BKMR\u4E91-\u5BA2\u6237\u7AEF");
		frmBkmr.getContentPane().setForeground(Color.BLACK);
		frmBkmr.setBounds(100, 100, 764, 535);
		frmBkmr.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmBkmr.getContentPane().setLayout(null);
		
		
		textField = new JTextField();
		textField.setBounds(486, 10, 186, 22);
		frmBkmr.getContentPane().add(textField);
		textField.setColumns(10);
		
		textField_1 = new JTextField();
		textField_1.setBounds(486, 43, 186, 22);
		frmBkmr.getContentPane().add(textField_1);
		textField_1.setColumns(10);
		
		JButton btnNewButton = new JButton("\u83B7\u53D6\u670D\u52A1\u5668\u6587\u4EF6\u76EE\u5F55");
		btnNewButton.setFont(new Font("微软雅黑", Font.BOLD, 15));
		
		
		
		
		
		
		
		
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				if("".equals(textField.getText())||"".equals(textField_1.getText())) {
					System.out.println("没东西");
				}
				else {
					try {
						
						
						String hostads=textField.getText();
						int portnum=Integer.parseInt(textField_1.getText());
						Socket client = new Socket(hostads,portnum );
						OutputStream os = client.getOutputStream();
						os.write(("p").getBytes());
						String filmName = "E://干.jpg";						
				        FileOutputStream fileOutputStream = new FileOutputStream(filmName);
				        byte b[] = new byte[1024];
				        InputStream is = client.getInputStream();
				        while(is.read(b)>0){
							
							fileOutputStream.write(b);
							
						}
				        os.close();
				        client.close();
				        System.out.println("ojbk了");
				        Label.setIcon(new ImageIcon("E:\\干.jpg"));
					} catch (UnknownHostException e1) {
						// TODO 自动生成的 catch 块
					//	e1.printStackTrace();
						JOptionPane.showMessageDialog(null, "地址有误或者服务器无法连接！");
					} catch (IOException e1) {
						// TODO 自动生成的 catch 块
				//		e1.printStackTrace();
						JOptionPane.showMessageDialog(null, "地址有误或者服务器无法连接！");
					}
				}
					
					
				
				
			}
		});
		btnNewButton.setBounds(12, 10, 160, 55);
		frmBkmr.getContentPane().add(btnNewButton);
		
		JButton btnNewButton_1 = new JButton("\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u6587\u4EF6");
		btnNewButton_1.setFont(new Font("微软雅黑", Font.BOLD, 15));
		btnNewButton_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//btnNewButton.setEnabled(false);
				if("".equals(textField.getText())||"".equals(textField_1.getText())) {
					System.out.println("没东西");
				}
				else {
					try {
						String hostads=textField.getText();
						int portnum=Integer.parseInt(textField_1.getText());
						Socket client = new Socket(hostads,portnum );
						OutputStream os = client.getOutputStream();
						String path=JOptionPane.showInputDialog(null,"根据服务器文件目录选择输入所需文件完整路径\n","title",JOptionPane.PLAIN_MESSAGE);
						os.write(("E:\\20170414_160452.mp4").getBytes());
						String filmName = "E:\\毛泽东西.mp4";						
				        FileOutputStream fileOutputStream = new FileOutputStream(filmName);
				        byte b[] = new byte[1024];
				        InputStream is = client.getInputStream();
				     
				        
				        CircleProgressBar progressBar = new CircleProgressBar();
					//	progressBar.setBounds(12, 93, 344, 34);
						frmBkmr.getContentPane().add(progressBar);
						progressBar.setSize(new Dimension(300, 300));
						progressBar.setVisible(true);
					//	progressBar.setMaximum(224000);
						
						byte c[] = new byte[1024];
						is.read(c);
						String r=new String(c);
						r=r.trim();
						int a=Integer.parseInt(r);
						int bb=a/(1024);
						System.out.println(r);
						progressBar.getwhole(bb/100);
						progressBar.setMinimumProgress(0); 
						progressBar.setMaximumProgress(bb);   // 235712659/1024
						progressBar.setLocation(25, 99);
				        new Thread() {
				        	public void run() {
				        		
				        	
				        try {
				        	int count=0;
				        	
							while(is.read(b)>0){
									
								fileOutputStream.write(b);
						//		Thread.currentThread().sleep(10);
								count++;
								
						   progressBar.setProgress(count);
								
							}
							 os.close();
						        client.close();
						        JOptionPane.showMessageDialog(null, "接受成功！去硬盘看看~");
						} catch (IOException e) {
							// TODO 自动生成的 catch 块
							e.printStackTrace();
						}
				        	}
				        }.start();
				        
				       
				        
				        
					} catch (UnknownHostException e1) {
						// TODO 自动生成的 catch 块
					//	e1.printStackTrace();
						JOptionPane.showMessageDialog(null, "地址有误或服务器未启动");
					} catch (IOException e1) {
						// TODO 自动生成的 catch 块
				//		e1.printStackTrace();
						JOptionPane.showMessageDialog(null, "地址有误或服务器未启动");
					}
				}
				
				
			}
			
		});
		btnNewButton_1.setBounds(184, 10, 172, 55);
		frmBkmr.getContentPane().add(btnNewButton_1);
		
		JLabel lblNewLabel = new JLabel("\u76EE\u7684\u670D\u52A1\u5668IP\uFF1A");
		lblNewLabel.setFont(new Font("微软雅黑", Font.BOLD, 15));
		lblNewLabel.setForeground(Color.BLUE);;
		lblNewLabel.setBounds(368, 10, 106, 22);
		frmBkmr.getContentPane().add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("\u7EA6\u5B9A\u7684\u7AEF\u53E3\u53F7\uFF1A");
		lblNewLabel_1.setFont(new Font("微软雅黑", Font.BOLD, 15));
		lblNewLabel_1.setForeground(Color.BLUE);;
		lblNewLabel_1.setBounds(368, 45, 106, 19);
		frmBkmr.getContentPane().add(lblNewLabel_1);
		
	//	JLabel Label = new JLabel("");
		Label.setBackground(Color.BLACK);
		Label.setBounds(360, 76, 374, 403);
		frmBkmr.getContentPane().add(Label);
		
//		 JProgressBar progressBar = new JProgressBar();
	//	progressBar.setBounds(12, 93, 344, 34);
	//	frame.getContentPane().add(progressBar);
	}
}
class LogView{
	
	public JFrame frame1;
	
	public JTextField name;
	public JTextField password;
	//public loginin window1 = new loginin();
	public LogView() {
		
		set();
	}
	
	void set() {
			
	//window1.frame1.setVisible(true);
	frame1 = new JFrame();
	//frame1.setTitle("BKMR\u4E91-\u5BA2\u6237\u7AEF");
	frame1.setBounds(150, 150, 347, 275);
	frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	frame1.getContentPane().setLayout(null);
	
	JLabel lblNewLabel = new JLabel("\u7528\u6237\u540D\uFF1A");
	lblNewLabel.setFont(new Font("微软雅黑", Font.BOLD, 15));
	lblNewLabel.setBounds(12, 35, 85, 23);
	frame1.getContentPane().add(lblNewLabel);
	
	JLabel lblNewLabel_1 = new JLabel("\u5BC6\u7801\uFF1A");
	lblNewLabel_1.setFont(new Font("微软雅黑", Font.BOLD, 15));
	lblNewLabel_1.setBounds(22, 69, 85, 23);
	frame1.getContentPane().add(lblNewLabel_1);
	
	name = new JTextField();
	name.setBounds(66, 35, 139, 23);
	frame1.getContentPane().add(name);
	name.setColumns(10);
	
	password = new JTextField();
	password.setBounds(66, 69, 139, 23);
	frame1.getContentPane().add(password);
	password.setColumns(10);
	
	JButton login = new JButton("\u767B\u9646");
	login.setFont(new Font("微软雅黑", Font.BOLD, 15));
	login.addActionListener(new ActionListener() {           //登陆按钮
		public void actionPerformed(ActionEvent e) {
			try {
				String username=name.getText();
				String userpassword=password.getText();
				String userlogcode=username+","+userpassword;
				
		//		int portnum=Integer.parseInt(textField_1.getText());
				Socket client = new Socket("127.0.01",6666 );
				OutputStream os = client.getOutputStream();
				os.write(("q"+userlogcode).getBytes());	 
				
		        byte b[] = new byte[1024];                  
		        InputStream is = client.getInputStream();
		        int readCount = is.read(b);
				String str = new String(b);
				 str = str.trim();
				 
				 if(str.equals("success")) {
				//	 JOptionPane.showMessageDialog(null, "登陆成功！");
					 
					 frame1.setVisible(false);
					  
						ClientView window = new ClientView();
					//	window.frame.setVisible(true);
				 }
				 else
					// JOptionPane.showMessageDialog(null, "登陆失败，检查用户名密码！");
					 
					 
		        os.close();
		        client.close();
		        System.out.println("验证完毕");
		       
				
				
				
			}
			catch(Exception ea) {
				ea.printStackTrace();
			}
		}
	});
	login.setBounds(66, 114, 139, 42);
	frame1.getContentPane().add(login);
	
	JButton regist = new JButton("\u6CE8\u518C");
	regist.setFont(new Font("微软雅黑", Font.BOLD, 15));
	regist.addActionListener(new ActionListener() {           //登陆按钮
		public void actionPerformed(ActionEvent e) {
			try {
				String username=name.getText();
				String userpassword=password.getText();
				String userlogcode=username+","+userpassword;
				
		//		int portnum=Integer.parseInt(textField_1.getText());
				Socket client = new Socket("127.0.01",6666 );
				OutputStream os = client.getOutputStream();
				os.write(("w"+userlogcode).getBytes());	 
				
		        byte b[] = new byte[1024];                  
		        InputStream is = client.getInputStream();
		        int readCount = is.read(b);
				String str = new String(b);
				 str = str.trim();
				 if(str.equals("success")) {
				//	 System.out.println("注册成功拉");
				//	 frame1.setVisible(false);
					 JOptionPane.showMessageDialog(null, "注册成功咯");
						
				 }
				 else
					 JOptionPane.showMessageDialog(null, "注册失败咯，建议你再试试");
					 
		        os.close();
		        client.close();
		        
		       
				
				
				
			}
			catch(Exception ea) {
				ea.printStackTrace();
			}
		}
	});
	regist.setBounds(205, 35, 74, 57);
	frame1.getContentPane().add(regist);
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	
	}
		

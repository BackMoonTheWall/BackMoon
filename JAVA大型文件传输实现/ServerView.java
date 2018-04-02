package wangluoshiyan;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JRadioButton;
import javax.swing.JTable;
import java.awt.Button;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JTextField;
import org.jb2011.lnf.beautyeye.*;
import org.jb2011.lnf.beautyeye.ch3_button.BEButtonUI;
import javax.swing.JMenuBar;
import javax.swing.JOptionPane;

import java.awt.Font;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.SimpleDateFormat;

import javax.swing.JCheckBox;
import java.awt.Color;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JTextPane;
import javax.swing.JTextArea;
import javax.swing.JScrollPane;
public class ServerView {
	JCheckBox many;
	JCheckBox one;
	JTextArea threadcount;
	JTextArea cpuwathcer;
	ServerSocket a;
	JTextArea state = new JTextArea();
	String pp;
	private JFrame frmBkmr;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		new Thread() {
			public void run() {
				
				try {
					 try
					    {
					        org.jb2011.lnf.beautyeye.BeautyEyeLNFHelper.launchBeautyEyeLNF();
					    }
					    catch(Exception e)
					    {
					        //TODO exception
					    }
					
					ServerView window = new ServerView();
					
					window.frmBkmr.setVisible(true);
					
				}
				catch (Exception e) {
					e.printStackTrace();
				}
			}
		}.start();
				
			
		
	}

	/**
	 * Create the application.
	 * @wbp.parser.entryPoint
	 */
	
	public ServerView() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	
	private void initialize() {
		pp="还没开始";
		frmBkmr = new JFrame();
		frmBkmr.setTitle("BKMR\u670D\u52A1\u5668\u4E91");
		frmBkmr.setBounds(100, 100, 538, 408);
		frmBkmr.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmBkmr.getContentPane().setLayout(null);
		
		JButton an1 = new JButton("\u542F\u52A8\u670D\u52A1\u5668");
		an1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(many.isSelected()) {
				an1.setEnabled(false);
				an1.setText("服务器已启动");
				SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
				state.append("本次记录时间:"+df.format(System.currentTimeMillis())+"\n");
				
			Watcher cpustate=new Watcher();
			new Thread() {
				public void run() {
					  try {
						  while(true) {
						//	  cpustate.printCpuUsage(cpustate.getCpuLoadPercentage());
							  double cpuu=cpustate.getCpuLoadPercentage();
							  String str = String.valueOf(cpuu);
							  cpuwathcer.setText(str+"%");
							  
						  }
							  
					  }
					  catch(Exception e) {
						//	e.printStackTrace();
						}
				
				}
			} .start();
			new Thread() {
				public void run() {
					  try {
						  while(true) {
						//	  cpustate.printCpuUsage(cpustate.getCpuLoadPercentage());
							  int count=Thread.activeCount();
							  String str = String.valueOf(count);
							  threadcount.setText(str);
							  
						  }
							  
					  }
					  catch(Exception e) {
						//	e.printStackTrace();
						}
				}
			} .start();
			Listen();
			}
				if(one.isSelected()) {
					an1.setEnabled(false);
					an1.setText("服务器已启动");
					SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
					state.append("本次记录时间:"+df.format(System.currentTimeMillis())+"\n");
					
				Watcher cpustate=new Watcher();
				new Thread() {
					public void run() {
						  try {
							  while(true) {
							//	  cpustate.printCpuUsage(cpustate.getCpuLoadPercentage());
								  double cpuu=cpustate.getCpuLoadPercentage();
								  String str = String.valueOf(cpuu);
								  cpuwathcer.setText(str+"%");
								  
							  }
								  
						  }
						  catch(Exception e) {
							//	e.printStackTrace();
							}
					
					}
				} .start();
				new Thread() {
					public void run() {
						  try {
							  while(true) {
							//	  cpustate.printCpuUsage(cpustate.getCpuLoadPercentage());
								  int count=Thread.activeCount();
								  String str = String.valueOf(count);
								  threadcount.setText(str);
								  
							  }
								  
						  }
						  catch(Exception e) {
							//	e.printStackTrace();
							}
					}
				} .start();
				Listensingle();
				}
			}
		});
		an1.setFont(new Font("微软雅黑", Font.BOLD, 15));
		an1.setBounds(8, 111, 173, 63);
		frmBkmr.getContentPane().add(an1);
		
		JLabel lblNewLabel = new JLabel("CPU\u4F7F\u7528\u7387");
		lblNewLabel.setForeground(Color.BLUE);
		lblNewLabel.setFont(new Font("微软雅黑", Font.BOLD, 14));
		lblNewLabel.setBounds(27, 13, 71, 19);
		frmBkmr.getContentPane().add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("\u5F53\u524D\u7EBF\u7A0B\u6570");
		lblNewLabel_1.setForeground(Color.BLUE);
		lblNewLabel_1.setFont(new Font("微软雅黑", Font.BOLD, 14));
		lblNewLabel_1.setBounds(110, 10, 76, 25);
		frmBkmr.getContentPane().add(lblNewLabel_1);
		
		JButton an2 = new JButton("\u5173\u95ED\u670D\u52A1\u5668");
		an2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
			}
		});
		
		an2.setFont(new Font("微软雅黑", Font.BOLD, 15));
		an2.setBounds(8, 213, 173, 63);
		frmBkmr.getContentPane().add(an2);
		
		JLabel lblNewLabel_2 = new JLabel(" \u670D\u52A1\u5668\u65E5\u5FD7:");
		lblNewLabel_2.setForeground(new Color(255, 0, 0));
		lblNewLabel_2.setFont(new Font("微软雅黑", Font.BOLD, 15));
		lblNewLabel_2.setBounds(276, 94, 93, 16);
		frmBkmr.getContentPane().add(lblNewLabel_2);
		
		 one = new JCheckBox("\u4EE5\u5355\u7EBF\u7A0B\u6A21\u5F0F\u542F\u52A8");
		one.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(one.isSelected())
				many.setEnabled(false);
				else
					many.setEnabled(true);
			}
		});
		one.setFont(new Font("微软雅黑", Font.BOLD, 14));
		one.setBounds(249, 11, 161, 26);
		frmBkmr.getContentPane().add(one);
		
		 many = new JCheckBox("\u4EE5\u591A\u7EBF\u7A0B\u6A21\u5F0F\u542F\u52A8");
		 many.addActionListener(new ActionListener() {
		 	public void actionPerformed(ActionEvent e) {
		 		if(many.isSelected())
		 		one.setEnabled(false);
		 		else
		 			one.setEnabled(true);
		 	}
		 });
		many.setFont(new Font("微软雅黑", Font.BOLD, 14));
		many.setBounds(249, 51, 161, 26);
		frmBkmr.getContentPane().add(many);
		
		
		state.setBounds(205, 111, 261, 211);
		frmBkmr.getContentPane().add(state);
		
		
		
		
		JScrollPane scroll = new JScrollPane(state);
		
		scroll.setBounds(193, 111, 285, 222);
		frmBkmr.getContentPane().add(scroll);
		scroll.setHorizontalScrollBarPolicy( 
				JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS); 
				scroll.setVerticalScrollBarPolicy( 
				JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
				
				 cpuwathcer = new JTextArea();
				cpuwathcer.setBounds(27, 43, 71, 25);
				frmBkmr.getContentPane().add(cpuwathcer);
				
				threadcount = new JTextArea();
				threadcount.setBounds(110, 43, 71, 25);
				frmBkmr.getContentPane().add(threadcount);
	}
	void Listen() {
		
		new Thread() {
			
			@Override

			public void run() {
				try {
					
					a=new ServerSocket(6666);
					while(true) {
						state.append("等待客户连接中"+"\n");
					//	final
						final Socket server= a.accept();
			
						pp="连接成功，分配新线程完成需求";
					
					
						final InputStream is = server.getInputStream();
						byte b[] = new byte[1024];
						int mm = is.read(b);
						String str = new String(b);
						 str = str.trim();
						 final char temp=str.charAt(0);     //用于判断客户需求
						 final char test="q".charAt(0);
						 final char test1="w".charAt(0);
						final String Name = str;     
						final String tt=new String("p");
						if(mm>0) {
							new Thread() {
								@Override
								public void run() {
								
								try {
									
									if(Name.equals(tt)) {          //传服务器文件目录图片
										state.append("客户 "+server.getInetAddress()+"连接成功，请求发送服务器文件目录"+"\n");
										FileInputStream fileInputStream = new FileInputStream("E:\\sb.jpg");
										OutputStream os = server.getOutputStream();
										byte[] bfile = new byte[1024];
										while (fileInputStream.read(bfile) > 0) {
											os.write(bfile);
										}
										fileInputStream.close();
										 is.close();
										 os.close();
										 server.close();

										 state.append("已发送"+"\n");
									}
									else if(temp==test) {
										String code=Name.substring(1);
										String []spt=code.split(",");
										String uusername=spt[0];
										String upassword=spt[1];
										logorregist a=new logorregist();
										OutputStream os = server.getOutputStream();
										if(a.login(uusername,upassword)==true){
											
											os.write("success".getBytes());
											 state.append("客户 "+server.getInetAddress()+"登陆了服务器"+"\n");
										}
										else {
											os.write("failed".getBytes());
										}
											is.close();
											os.close();
									
									}
									else if(temp==test1) {
										String code=Name.substring(1);
										String []spt=code.split(",");
										String uusername=spt[0];
										String upassword=spt[1];
										logorregist a=new logorregist();
										OutputStream os = server.getOutputStream();
										if(a.regist(uusername,upassword)==true) {
											os.write("success".getBytes());
											 state.append(server.getInetAddress()+"注册了账户"+"\n");
										}
										else {
											os.write("failed".getBytes());
										}
											is.close();
											os.close();	
									}
									else {          //传由客户端指定的文件
										
										int n = JOptionPane.showConfirmDialog(null,server.getInetAddress()+"请求传送"+Name+"同意不", "标题",JOptionPane.YES_NO_OPTION); //返回值为0或1
										
										state.append("客户 "+server.getInetAddress()+"请求传送 "+Name+"\n");
										if(n==0) {
											state.append("接受请求，正在发送..."+"\n");
										FileInputStream fileInputStream = new FileInputStream(Name);
									
										OutputStream os = server.getOutputStream();
										int a=fileInputStream.available();
										String send=""+a;
										System.out.println(send);
										os.write(send.getBytes());
										byte[] bfile = new byte[1024];
										while (fileInputStream.read(bfile) > 0) {
											os.write(bfile);
										}
										fileInputStream.close();
										 
										 os.close();
										 is.close();
										 server.close();
										// JOptionPane.showConfirmDialog(null, "This a warning!", " WarningDialog!", JOptionPane.YES_NO_OPTION, JOptionPane.WARNING_MESSAGE);
										// System.out.println("文件传送完毕");
										 state.append("和客户 "+server.getInetAddress()+"完成传输"+"\n");
										}
										else {
										
										 is.close();
										 server.close();
										 System.out.println("拒绝");
										 state.append("服务器拒绝了此次请求"+"\n");
										}
									}
				
								}
								
								catch(Exception e) {
									JOptionPane.showMessageDialog(null, "有客户强行中断了连接！");
									state.append("当前客户强行中断了连接"+"\n");
								}
								}
								
							}.start();
						}
					}
				}
				catch (Exception e) {
					// TODO Auto-generated catch block
					JOptionPane.showMessageDialog(null, "有客户强行中断了连接！");
				}
			}
	}.start();
	}
void Listensingle() {
		
		new Thread() {
			
			@Override

			public void run() {
				try {
					
					a=new ServerSocket(6666);
				//	while(true) {
						state.append("等待客户连接中"+"\n");
					//	final
						final Socket server= a.accept();
				//		System.out.println("客户"+server.getLocalPort()+"连接成功，分配新线程完成需求");
						pp="连接成功，分配新线程完成需求";
					//	state.append("客户 "+server.getInetAddress()+"连接成功，分配新线程完成需求"+"\n");
						
					//	state.invalidate();
					
						final InputStream is = server.getInputStream();
						byte b[] = new byte[1024];
						int mm = is.read(b);
						String str = new String(b);
						 str = str.trim();
						 final char temp=str.charAt(0);     //用于判断客户需求
						 final char test="q".charAt(0);
						 final char test1="w".charAt(0);
						final String Name = str;     
						final String tt=new String("p");
						if(mm>0) {
							new Thread() {
								@Override
								public void run() {
								//	System.out.println("xiancheng启动");
								try {
									
									if(Name.equals(tt)) {          //传服务器文件目录图片
										state.append("客户 "+server.getInetAddress()+"连接成功，请求发送服务器文件目录"+"\n");
										FileInputStream fileInputStream = new FileInputStream("E:\\sb.jpg");
										OutputStream os = server.getOutputStream();
										byte[] bfile = new byte[1024];
										while (fileInputStream.read(bfile) > 0) {
											os.write(bfile);
										}
										fileInputStream.close();
										 is.close();
										 os.close();
										 server.close();

										 state.append("已发送"+"\n");
									}
									else if(temp==test) {
										String code=Name.substring(1);
										String []spt=code.split(",");
										String uusername=spt[0];
										String upassword=spt[1];
										logorregist a=new logorregist();
										OutputStream os = server.getOutputStream();
										if(a.login(uusername,upassword)==true){
											
											os.write("success".getBytes());
											 state.append("客户 "+server.getInetAddress()+"登陆了服务器"+"\n");
										}
										else {
											os.write("failed".getBytes());
										}
											is.close();
											os.close();
									
									}
									else if(temp==test1) {
										String code=Name.substring(1);
										String []spt=code.split(",");
										String uusername=spt[0];
										String upassword=spt[1];
										logorregist a=new logorregist();
										OutputStream os = server.getOutputStream();
										if(a.regist(uusername,upassword)==true) {
											os.write("success".getBytes());
											 state.append(server.getInetAddress()+"注册了账户"+"\n");
										}
										else {
											os.write("failed".getBytes());
										}
											is.close();
											os.close();	
									}
									else {          //传由客户端指定的文件
										
										int n = JOptionPane.showConfirmDialog(null,server.getInetAddress()+"请求传送"+Name+"同意不", "标题",JOptionPane.YES_NO_OPTION); //返回值为0或1
										
										state.append("客户 "+server.getInetAddress()+"请求传送 "+Name+"\n");
										if(n==0) {
											state.append("接受请求，正在发送..."+"\n");
										FileInputStream fileInputStream = new FileInputStream(Name);
									
										OutputStream os = server.getOutputStream();
										int a=fileInputStream.available();
										String send=""+a;
										System.out.println(send);
										os.write(send.getBytes());
										byte[] bfile = new byte[1024];
										while (fileInputStream.read(bfile) > 0) {
											os.write(bfile);
										}
										fileInputStream.close();
										 
										 os.close();
										 is.close();
										 server.close();
										// JOptionPane.showConfirmDialog(null, "This a warning!", " WarningDialog!", JOptionPane.YES_NO_OPTION, JOptionPane.WARNING_MESSAGE);
										// System.out.println("文件传送完毕");
										 state.append("和客户 "+server.getInetAddress()+"完成传输"+"\n");
										}
										else {
										
										 is.close();
										 server.close();
										 System.out.println("拒绝");
										 state.append("服务器拒绝了此次请求"+"\n");
										}
									}
				
								}
								
								catch(Exception e) {
									e.printStackTrace();
								}
								}
								
							}.start();
						}
				//	}
				}
				catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
	}.start();
	}
}

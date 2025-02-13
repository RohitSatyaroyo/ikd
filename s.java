/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cakeshopmanagement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author harsh
 */




public class CategoryDetails extends javax.swing.JFrame {
  
int categoryid;
    String categoryname;
    /**
     * Creates new form CategoryDetails
     */
    DefaultTableModel model;
    public CategoryDetails() {
        initComponents();
        edit();
         autoOrderID();
        settbl();
        txtclr();
        
    }
    void para()
    {
        categoryid=Integer.parseInt(cid.getText());
        categoryname=cname.getText();
    }
    void edit()
{
    cid.setEditable(false);
}
    void add()
    {
       if (cname.getText().trim().isEmpty()) {
        JOptionPane.showMessageDialog(this, "Please enter a category name.");
        return;
    }

    try (Connection con = getConnection()) {
        categoryid = Integer.parseInt(cid.getText());
        String categoryname = cname.getText().trim();

        PreparedStatement ps = con.prepareStatement("INSERT INTO category (Categoryid, Categoryname) VALUES (?, ?)");
        ps.setInt(1, categoryid);
        ps.setString(2, categoryname);
        ps.executeUpdate();

        JOptionPane.showMessageDialog(this, "Category added successfully!");
        clrtbl();
        settbl();
        autoOrderID();
        txtclr();
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
    }
    }
    
    public void autoOrderID()

    {
      
        try (Connection con = getConnection()) {
        PreparedStatement pst = con.prepareStatement("SELECT MAX(Categoryid) FROM category");
        ResultSet rs = pst.executeQuery();
        if (rs.next()) {
            int r = rs.getInt(1) + 1;
            cid.setText(Integer.toString(r));
        }
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
    }
    }
    void update(int categoryid,String categoryname)
    {
        
        if (cname.getText().trim().isEmpty()) {
        JOptionPane.showMessageDialog(this, "Please select a category to update.");
        return;
    }

    try (Connection con = getConnection()) {
        String sql = "UPDATE category SET Categoryname = ? WHERE Categoryid = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setString(1, categoryname.trim());
        ps.setInt(2, categoryid);

        int rowsAffected = ps.executeUpdate();
        if (rowsAffected > 0) {
            JOptionPane.showMessageDialog(this, "Category updated successfully!");
            clrtbl();
            settbl();
            txtclr();
        } else {
            JOptionPane.showMessageDialog(this, "No category found with the specified ID.");
        }
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
    }
    }
    void delete(int categoryid)
    {
       
          if (cid.getText().trim().isEmpty()) {
        JOptionPane.showMessageDialog(this, "Please select a category to delete.");
        return;
    }

    int opt = JOptionPane.showConfirmDialog(this, "Are you sure you want to delete this category?", "Delete", JOptionPane.YES_NO_OPTION);
    if (opt == JOptionPane.YES_OPTION) {
        try (Connection con = getConnection()) {
            PreparedStatement ps = con.prepareStatement("DELETE FROM category WHERE Categoryid = ?");
            ps.setInt(1, categoryid);

            int rowsAffected = ps.executeUpdate();
            if (rowsAffected > 0) {
                JOptionPane.showMessageDialog(this, "Category deleted successfully!");
                clrtbl();
                settbl();
                txtclr();
            } else {
                JOptionPane.showMessageDialog(this, "No category found with the specified ID.");
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
        }
    }
      
    }
    
     void settbl()
    {
       clrtbl(); // Clear previous data
    DefaultTableModel tblModel = (DefaultTableModel) tbl.getModel();
    tblModel.setColumnIdentifiers(new String[]{"Category ID", "Category Name"}); // Initialize columns

    try (Connection con = getConnection()) {
        String sql = "SELECT * FROM category";
        PreparedStatement ps = con.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            String categoryid = String.valueOf(rs.getInt("Categoryid"));
            String categoryname = rs.getString("Categoryname");
            tblModel.addRow(new Object[]{categoryid, categoryname});
        }
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
    }
    
    
    }
       
      void selecttbl()
    {
       int i=tbl.getSelectedRow();
       DefaultTableModel tblModel=(DefaultTableModel)tbl.getModel();
       cid.setText(tblModel.getValueAt(i,0).toString());
       cname.setText(tblModel.getValueAt(i,1).toString());
    }
    
    void clrtbl()
    {
        DefaultTableModel tblModel=(DefaultTableModel)tbl.getModel();
        tblModel.setRowCount(0);
    }
    
    void txtclr()
    {
//        cid.setText("");
        cname.setText("");
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        cid = new javax.swing.JTextField();
        cname = new javax.swing.JTextField();
        jScrollPane1 = new javax.swing.JScrollPane();
        tbl = new javax.swing.JTable();
        add = new javax.swing.JButton();
        update = new javax.swing.JButton();
        delete = new javax.swing.JButton();
        next = new javax.swing.JButton();
        back = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel1.setBackground(new java.awt.Color(204, 255, 204));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setFont(new java.awt.Font("Tahoma", 1, 36)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(0, 153, 102));
        jLabel1.setText("Category");
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(240, 70, 180, 60));

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel3.setText("Category Id");
        jPanel1.add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 200, 150, -1));

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel2.setText("Category Name");
        jPanel1.add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 280, 190, -1));
        jPanel1.add(cid, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 200, 210, 40));

        cname.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyPressed(java.awt.event.KeyEvent evt) {
                cnameKeyPressed(evt);
            }
        });
        jPanel1.add(cname, new org.netbeans.lib.awtextra.AbsoluteConstraints(360, 280, 210, 40));

        tbl.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {

            }
        ){
            public boolean isCellEditable(int row,int column)
            {
                return false;
            }
        });
        tbl.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tbl);

        jPanel1.add(jScrollPane1, new org.netbeans.lib.awtextra.AbsoluteConstraints(700, 170, -1, -1));

        add.setBackground(new java.awt.Color(0, 153, 102));
        add.setFont(new java.awt.Font("Tahoma", 1, 28)); // NOI18N
        add.setForeground(new java.awt.Color(255, 255, 255));
        add.setText("ADD ");
        add.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                addActionPerformed(evt);
            }
        });
        jPanel1.add(add, new org.netbeans.lib.awtextra.AbsoluteConstraints(120, 380, -1, -1));

        update.setBackground(new java.awt.Color(0, 153, 102));
        update.setFont(new java.awt.Font("Tahoma", 1, 28)); // NOI18N
        update.setForeground(new java.awt.Color(255, 255, 255));
        update.setText("UPDATE");
        update.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                updateActionPerformed(evt);
            }
        });
        jPanel1.add(update, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 380, -1, -1));

        delete.setBackground(new java.awt.Color(0, 153, 102));
        delete.setFont(new java.awt.Font("Tahoma", 1, 28)); // NOI18N
        delete.setForeground(new java.awt.Color(255, 255, 255));
        delete.setText("DELETE");
        delete.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                deleteActionPerformed(evt);
            }
        });
        jPanel1.add(delete, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 380, -1, -1));

        next.setBackground(new java.awt.Color(0, 153, 102));
        next.setFont(new java.awt.Font("Tahoma", 1, 28)); // NOI18N
        next.setForeground(new java.awt.Color(255, 255, 255));
        next.setText("NEXT");
        next.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                nextActionPerformed(evt);
            }
        });
        jPanel1.add(next, new org.netbeans.lib.awtextra.AbsoluteConstraints(380, 460, -1, -1));

        back.setBackground(new java.awt.Color(0, 153, 102));
        back.setFont(new java.awt.Font("Tahoma", 1, 28)); // NOI18N
        back.setForeground(new java.awt.Color(255, 255, 255));
        back.setText("BACK");
        back.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                backActionPerformed(evt);
            }
        });
        jPanel1.add(back, new org.netbeans.lib.awtextra.AbsoluteConstraints(190, 460, -1, -1));

        getContentPane().add(jPanel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 1300, 790));

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>                        

    private void addActionPerformed(java.awt.event.ActionEvent evt) {                                    
        // TODO add your handling code here:
         add();
        settbl();
        autoOrderID();
        txtclr();
        
    }                                   

    private void updateActionPerformed(java.awt.event.ActionEvent evt) {                                       
        // TODO add your handling code here:
        para();
        update(categoryid,categoryname);
        txtclr();
    }                                      

    private void deleteActionPerformed(java.awt.event.ActionEvent evt) {                                       
        // TODO add your handling code here:
         delete(categoryid);
         txtclr();
    }                                      

    private void nextActionPerformed(java.awt.event.ActionEvent evt) {                                     
        // TODO add your handling code here:
        ProductManagement pm=new ProductManagement();
        pm.setVisible(true);
        dispose();
    }                                    

    private void tblMouseClicked(java.awt.event.MouseEvent evt) {                                 
        // TODO add your handling code here:
        selecttbl();
    }                                

    private void backActionPerformed(java.awt.event.ActionEvent evt) {                                     
        // TODO add your handling code here:
        AfterLogin af=new AfterLogin();
        af.setVisible(true);
        dispose();
    }                                    

    private void cnameKeyPressed(java.awt.event.KeyEvent evt) {                                 
             char c = evt.getKeyChar();
    if (!Character.isLetter(c) && !Character.isWhitespace(c) && !Character.isISOControl(c)) {
        evt.consume(); // Block invalid input
    }
    }                                

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        private Connection getConnection() throws Exception {
            String url = "jdbc:mysql://localhost:3306/student";
            String user = "root";
            String password = ""; // Replace with your actual password
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(url, user, password);
        }
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(CategoryDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CategoryDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CategoryDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CategoryDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new CategoryDetails().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton add;
    private javax.swing.JButton back;
    private javax.swing.JTextField cid;
    private javax.swing.JTextField cname;
    private javax.swing.JButton delete;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JButton next;
    private javax.swing.JTable tbl;
    private javax.swing.JButton update;
    // End of variables declaration                   
}

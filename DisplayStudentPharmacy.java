import java.io.Serializable;
public class DisplayStudentPharmacy implements Serializable
{
   String FullName,Email,Durations,Department,Address,City,ContactNumber,StudentJoinDate,PostalCode,Province,Stream,Degree,Decieses,Prescription,CategoriesofMediines;
   int Amount;
   

    public DisplayStudentPharmacy() 
    {
           }
    
    public String getFullName() {
        return FullName;
    }

    public String getEmail() {
        return Email;
    }

    public String getDurations() {
        return Durations;
    }

    public String getDepartment() {
        return Department;
    }

    public String getAddress() {
        return Address;
    }

    public String getCity() {
        return City;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public String getStudentJoinDate() {
        return StudentJoinDate;
    }
    
    public String getPostalCode() {
        return PostalCode;
    }

    public String getProvince() {
        return Province;
    }
    
    public String getStream() {
        return Stream;
    }
    
    public String getDegree() {
        return Degree;
    }
    
    public String getDecieses() {
        return Decieses;
    }
    
    public String getPrescription() {
        return Prescription;
    }

    public String getCategoriesofMediines() {
        return CategoriesofMediines;
    }

    public int getAmount() {
        return getAmount;
    }



    public void setAmount(int Amount) {
        this.Amount = Amount;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public void setDurations(String Durations) {
        this.Durations = Durations;
    }

    public void setDepartment(String Department) {
        this.Department = Department;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }
    
    public void setCity(String City) {
        this.City = City;
    }
    
    public void setContactNumber(String ContactNumber) {
        this.ContactNumber = ContactNumber;
    }
    
    public void setStudentJoinDate(String StudentJoinDate) {
        this.StudentJoinDate = StudentJoinDate;
    }

    public void setPostalCode(String PostalCode) {
        this.PostalCode = PostalCode;
    }
    
    public void setProvince(String Province) {
        this.Province = Province;
    }
    
    public void setStream(String Stream) {
        this.Stream = Stream;
    } 
    
    public void setDegree(String Degree) {
        this.Degree = Degree;
    }
    
    public void setDecieses(String Decieses) {
        this.Decieses = Decieses;
    }

    public void setgetPrescription(String getPrescription) {
        this.getPrescription = getPrescription;
    } 
    
    public void setCategoriesofMediines(String CategoriesofMediines) {
        this.CategoriesofMediines = CategoriesofMediines;
    } 

   
   
}
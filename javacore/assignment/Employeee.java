package assignment;

public class Employeee {
	String name;
	String jobtittle;
	double salary;
	Employeee(String name,String jobtittle,double salary)
	{
		this.name = name;
		this.jobtittle = jobtittle;
		this.salary = salary;
	}
	public void display()
	{
		System.out.println(name);
		System.out.println(jobtittle);
		System.out.println(salary);
	}
	public void updatesalary(double salary)
	{
		this.salary = salary;
		System.out.println(salary);
	}

	public static void main(String[] args) {
		Employeee obj = new Employeee("ram","tester",6000.00);
		obj.display();
		obj.updatesalary(10000.00);
	}

}
package assignment;


public class Person {
	String name;
	int age;
	Person(String name,int age)
	{
		this.name = name;
		this.age = age;
	}
	void getdetails()
	{
		System.out.println(name +" "+ age);
	}

	public static void main(String[] args) {
		Person obj = new Person("kabilan",21);
		Person obj1 = new Person("raju",22);
		obj1.getdetails();
		obj.getdetails();
	}

}
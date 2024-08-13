package assignment;


public class Dog {
	String name;
	String breed;
	Dog(String name,String breed)
	{
		this.name = name;
		this.breed = breed;
	}
	void setdetails()
	{
		name = "dog";
		breed = "dobermann";
		System.out.println(name+" "+breed);
	}
	public static void main(String[] args) {
		Dog obj = new Dog("dog1","man");
		obj.setdetails();
	}

}
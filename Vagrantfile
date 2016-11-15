Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.network "private_network", ip: "10.110.0.10", type: "dhcp"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "ansible-provision/playbook.yml"
  end
end

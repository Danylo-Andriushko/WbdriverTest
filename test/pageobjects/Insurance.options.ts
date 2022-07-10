export class InsuranceOptions{
private getBrokePlace(){
     return $('#quotation_breakdowncover')
   }

private getWindscreenRapair(){
     return $('#quotation_windscreenrepair_t[value="Yes"]')
}

private getIncidents(){
     return $('[name="incidents"]')
}

private getRegistration(){
     return $('[name="registration"]')
}

private getMileage(){
     return $('[name="mileage"]')
}

private getVehicleValue(){
     return $('[name="value"]')
}
private getParkingLocation(){
     return $('#quotation_vehicle_attributes_parkinglocation')
}

private getYear(){
     return $('#quotation_vehicle_attributes_policystart_1i')
}

private getMonth(){
     return $('#quotation_vehicle_attributes_policystart_2i')
}

private getDay(){
     return $('#quotation_vehicle_attributes_policystart_3i')
}

private getSaveButton(){
     return $('[value="Save Quotation"]')
}


public brokePlace(){
     return this.getBrokePlace()
   }

public windscreenRapair(){
     return this.getWindscreenRapair()
}

public incidents(){
     return this.getIncidents()
}
public registration(){
     return this.getRegistration()
}

public mileage(){
     return this.getMileage()
}

public vehicleValue(){
     return this.getVehicleValue()
}

public parkingLocation(){
     return this.getParkingLocation()
}

public selectYear(){
     return this.getYear()
}

public selectMonth(){
     return this.getMonth()
}

public selectDay(){
     return this.getDay()
}


public saveButton(){
     return this.getSaveButton()
}

}
Speech.Set_IICAddress(Speech.I2C_ADDR_Select.OLD_ADDR)
basic.showIcon(IconNames.Heart)
Speech.Wait_XFS_Status(Speech.ChipStatus_Type.ChipStatus_InitSuccessful)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})

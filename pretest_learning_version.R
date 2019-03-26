#######

#### metaphor sentence-picture match prestudy, 20.03.2019
###edition for thao to learn R


##install package from source to deal with ibex files
#####question marks mean thao you have to add something yourself!!!


install.packages("ibex.tar.gz", repos=NULL)


#####learn what the functions within the package do

help(package = IBEX.to.R)

####load packages, install them if you do not have them already

#load packages 
library(IBEX.to.R)
library(MASS)
library(stringi)
library(lmerTest)
library(lme4)
library(tidyr)
library(dplyr)
###set working directory ????

setwd("/Praktikum/ibex_project/metapher”)


###remove scientific notation ????


options(scipen=999)


##import data using the function get.results from ibex.to.r
#####save them to another file callled 'processed'. get.result(????)
  
  
processed<- get.result("results.csv", controller="DashedSentenceCW")


####load the new file again. data(????)

data<-read.csv("processed", header = F, comment.char = "#", encoding = "UTF-8" , 
                col.names = paste0("V",seq_len(11)), 
                fill = TRUE)

##### clean data

data$value <- data[,11]
data$eventType <- data[,8]
data$eventTime <- data[,12]

data1 <- select(data, subject, item.number, type, eventType, eventTime, value)

data2 <- subset(data1, eventType=="Selector")
data2$subject <- as.factor(data2$subject)
data2$subject <- as.numeric(data2$subject)


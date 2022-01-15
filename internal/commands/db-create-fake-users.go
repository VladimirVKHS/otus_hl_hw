package commands

import (
	"context"
	"github.com/cheggaaa/pb/v3"
	"github.com/jaswdr/faker"
	"math/rand"
	"otus_sn_go/internal/helpers/hash"
	user2 "otus_sn_go/internal/models/user"
)

func DbCreateFakeUser(count int) error {

	bar := pb.StartNew(count)
	faker := faker.New()
	password, _ := hash.HashPassword("123456")

	for i := 0; i < count; i++ {
		user := user2.User{
			Login:     faker.Person().Contact().Email,
			LastName:  faker.Person().LastName(),
			Age:       rand.Intn(100) + 18,
			Interests: faker.Lorem().Sentence(10),
			City:      faker.Address().City(),
			IsPublic:  true,
			Password:  password,
		}
		isMale := rand.Intn(10) > 5
		if isMale {
			user.FirstName = faker.Person().FirstNameMale()
			user.Sex = "male"
		} else {
			user.FirstName = faker.Person().FirstNameFemale()
			user.Sex = "female"
		}
		if err := user.Save(context.Background()); err != nil {
			panic(err)
		}
		bar.Increment()
	}
	bar.Finish()
	return nil
}
